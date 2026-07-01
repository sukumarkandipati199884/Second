from flask import jsonify, request
from flask_jwt_extended import jwt_required
from models import db, Task


def register_routes(app):
    @app.route('/tasks', methods=['GET'])
    @jwt_required()
    def get_tasks():
        tasks = Task.query.all()
        return jsonify([task.to_dict() for task in tasks]), 200

    @app.route('/tasks', methods=['POST'])
    @jwt_required()
    def create_task():
        data = request.get_json()
        if not data or 'title' not in data:
            return jsonify({'error': 'Invalid input'}), 400
        task = Task(title=data['title'], description=data.get('description', ''))
        db.session.add(task)
        db.session.commit()
        return jsonify(task.to_dict()), 201

    @app.route('/tasks/<int:task_id>', methods=['PUT'])
    @jwt_required()
    def update_task(task_id):
        task = Task.query.get_or_404(task_id)
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Invalid input'}), 400
        task.title = data.get('title', task.title)
        task.description = data.get('description', task.description)
        db.session.commit()
        return jsonify(task.to_dict()), 200

    @app.route('/tasks/<int:task_id>', methods=['DELETE'])
    @jwt_required()
    def delete_task(task_id):
        task = Task.query.get_or_404(task_id)
        db.session.delete(task)
        db.session.commit()
        return jsonify({'message': 'Task deleted'}), 200