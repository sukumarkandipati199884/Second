from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required

# Define the blueprint: 'task', set its url prefix: app.url/task
task_blueprint = Blueprint('task', __name__, url_prefix='/task')

tasks = []  # In-memory task list for demonstration

@task_blueprint.route('/', methods=['GET'])
@jwt_required()
def get_tasks():
    return jsonify(tasks), 200

@task_blueprint.route('/', methods=['POST'])
@jwt_required()
def create_task():
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({'error': 'Invalid input'}), 400
    task = {
        'id': len(tasks) + 1,
        'title': data['title'],
        'description': data.get('description', '')
    }
    tasks.append(task)
    return jsonify(task), 201

@task_blueprint.route('/<int:task_id>', methods=['PUT'])
@jwt_required()
def update_task(task_id):
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({'error': 'Invalid input'}), 400
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        return jsonify({'error': 'Task not found'}), 404
    task.update({
        'title': data['title'],
        'description': data.get('description', task['description'])
    })
    return jsonify(task), 200

@task_blueprint.route('/<int:task_id>', methods=['DELETE'])
@jwt_required()
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return jsonify({'message': 'Task deleted'}), 200