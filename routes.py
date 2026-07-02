from flask import jsonify, request

employees = []

class Employee:
    def __init__(self, emp_id, name, position):
        self.emp_id = emp_id
        self.name = name
        self.position = position

    def to_dict(self):
        return {'emp_id': self.emp_id, 'name': self.name, 'position': self.position}


def init_routes(app):
    @app.route('/employees', methods=['GET'])
    def get_employees():
        return jsonify([emp.to_dict() for emp in employees]), 200

    @app.route('/employees/<int:emp_id>', methods=['GET'])
    def get_employee(emp_id):
        employee = next((emp for emp in employees if emp.emp_id == emp_id), None)
        if employee:
            return jsonify(employee.to_dict()), 200
        return jsonify({'error': 'Employee not found'}), 404

    @app.route('/employees', methods=['POST'])
    def create_employee():
        data = request.get_json()
        new_employee = Employee(emp_id=data['emp_id'], name=data['name'], position=data['position'])
        employees.append(new_employee)
        return jsonify(new_employee.to_dict()), 201

    @app.route('/employees/<int:emp_id>', methods=['PUT'])
    def update_employee(emp_id):
        data = request.get_json()
        employee = next((emp for emp in employees if emp.emp_id == emp_id), None)
        if employee:
            employee.name = data.get('name', employee.name)
            employee.position = data.get('position', employee.position)
            return jsonify(employee.to_dict()), 200
        return jsonify({'error': 'Employee not found'}), 404

    @app.route('/employees/<int:emp_id>', methods=['DELETE'])
    def delete_employee(emp_id):
        global employees
        employees = [emp for emp in employees if emp.emp_id != emp_id]
        return jsonify({'message': 'Employee deleted'}), 200