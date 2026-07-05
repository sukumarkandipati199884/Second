from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

# In-memory data store for employees
db = {
    'employees': []
}

@app.route('/', methods=['GET'])
def root():
    return jsonify({'message': 'Welcome to the Employee Management API'}), 200

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

@app.route('/employees', methods=['GET'])
def get_employees():
    return jsonify({'employees': db['employees']}), 200

@app.route('/employees', methods=['POST'])
def add_employee():
    try:
        data = request.get_json()
        if not data or 'name' not in data or 'position' not in data:
            return jsonify({'error': 'Invalid input'}), 400
        employee = {
            'id': len(db['employees']) + 1,
            'name': data['name'],
            'position': data['position']
        }
        db['employees'].append(employee)
        return jsonify(employee), 201
    except Exception as e:
        logging.error(f"Error adding employee: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    employee = next((emp for emp in db['employees'] if emp['id'] == employee_id), None)
    if employee is None:
        return jsonify({'error': 'Employee not found'}), 404
    return jsonify(employee), 200

@app.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    try:
        data = request.get_json()
        employee = next((emp for emp in db['employees'] if emp['id'] == employee_id), None)
        if employee is None:
            return jsonify({'error': 'Employee not found'}), 404
        if 'name' in data:
            employee['name'] = data['name']
        if 'position' in data:
            employee['position'] = data['position']
        return jsonify(employee), 200
    except Exception as e:
        logging.error(f"Error updating employee: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    global db
    employee = next((emp for emp in db['employees'] if emp['id'] == employee_id), None)
    if employee is None:
        return jsonify({'error': 'Employee not found'}), 404
    db['employees'] = [emp for emp in db['employees'] if emp['id'] != employee_id]
    return jsonify({'message': 'Employee deleted'}), 200

if __name__ == '__main__':
    app.run(debug=True)
