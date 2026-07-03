from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, create_access_token
from models import db, Task



task_blueprint = Blueprint('tasks', __name__)

@task_blueprint.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks]), 200

@task_blueprint.route('/tasks', methods=['POST'])
@jwt_required()
def create_task():
    data = request.get_json()
    new_task = Task(title=data['title'], description=data['description'])
    db.session.add(new_task)
    db.session.commit()
    return jsonify(new_task.to_dict()), 201

@task_blueprint.route('/tasks/<int:task_id>', methods=['PUT'])
@jwt_required()
def update_task(task_id):
    data = request.get_json()
    task = Task.query.get_or_404(task_id)
    task.title = data['title']
    task.description = data['description']
    db.session.commit()
    return jsonify(task.to_dict()), 200

@task_blueprint.route('/tasks/<int:task_id>', methods=['DELETE'])
@jwt_required()
def delete_task(task_id):
    task = Task.query.get_or_404(task_id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted'}), 200

@task_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if data['username'] == 'admin' and data['password'] == 'password':  # Replace with real user validation
        access_token = create_access_token(identity={'username': data['username']})
        return jsonify(access_token=access_token), 200
    return jsonify({'message': 'Invalid credentials'}), 401