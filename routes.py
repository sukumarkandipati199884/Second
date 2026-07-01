from flask import jsonify, request
from flask_jwt_extended import jwt_required


def register_routes(app):
    @app.route('/tasks', methods=['GET'])
    @jwt_required()
    def get_tasks():
        # Placeholder for getting tasks
        return jsonify({'tasks': []}), 200

    @app.route('/tasks', methods=['POST'])
    @jwt_required()
    def create_task():
        # Placeholder for creating a task
        return jsonify({'message': 'Task created'}), 201

    @app.route('/tasks/<int:task_id>', methods=['PUT'])
    @jwt_required()
    def update_task(task_id):
        # Placeholder for updating a task
        return jsonify({'message': 'Task updated'}), 200

    @app.route('/tasks/<int:task_id>', methods=['DELETE'])
    @jwt_required()
    def delete_task(task_id):
        # Placeholder for deleting a task
        return jsonify({'message': 'Task deleted'}), 200