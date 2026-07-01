from flask import Blueprint, jsonify, request

employee_blueprint = Blueprint('employee', __name__)

# In-memory database for demonstration purposes
employees = {}

@employee_blueprint.route('/employees', methods=['GET'])
def get_employees():
    return jsonify(list(employees.values()))

@employee_blueprint.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    employee = employees.get(employee_id)
    if employee:
        return jsonify(employee)
    return jsonify({'error': 'Employee not found'}), 404

@employee_blueprint.route('/employees', methods=['POST'])
def create_employee():
    data = request.get_json()
    employee_id = len(employees) + 1
    employees[employee_id] = {'id': employee_id, 'name': data['name'], 'position': data['position']}
    return jsonify(employees[employee_id]), 201

@employee_blueprint.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    if employee_id in employees:
        data = request.get_json()
        employees[employee_id].update(data)
        return jsonify(employees[employee_id])
    return jsonify({'error': 'Employee not found'}), 404

@employee_blueprint.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    if employee_id in employees:
        del employees[employee_id]
        return jsonify({'message': 'Employee deleted'}), 200
    return jsonify({'error': 'Employee not found'}), 404