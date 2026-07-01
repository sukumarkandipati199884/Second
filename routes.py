from flask import jsonify, request, Blueprint

bp = Blueprint('api', __name__, url_prefix='/api')

# Sample data
employees = [
    {'id': 1, 'name': 'John Doe', 'position': 'Developer'},
    {'id': 2, 'name': 'Jane Smith', 'position': 'Manager'}
]

# Get all employees
@bp.route('/employees', methods=['GET'])
def get_employees():
    return jsonify(employees)

# Get employee by ID
@bp.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee:
        return jsonify(employee)
    return jsonify({'error': 'Employee not found'}), 404

# Create a new employee
@bp.route('/employees', methods=['POST'])
def create_employee():
    data = request.get_json()
    new_employee = {
        'id': len(employees) + 1,
        'name': data['name'],
        'position': data['position']
    }
    employees.append(new_employee)
    return jsonify(new_employee), 201

# Update an employee
@bp.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    data = request.get_json()
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee:
        employee.update(data)
        return jsonify(employee)
    return jsonify({'error': 'Employee not found'}), 404

# Delete an employee
@bp.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    global employees
    employees = [emp for emp in employees if emp['id'] != employee_id]
    return jsonify({'message': 'Employee deleted'})

def register_routes(app):
    app.register_blueprint(bp)