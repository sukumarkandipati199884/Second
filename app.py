from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# In-memory data store
employees = []

@app.route('/', methods=['GET'])
def root():
    return jsonify({"message": "Welcome to the Employee Management API"}), 200

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"}), 200

@app.route('/employees', methods=['GET'])
def get_employees():
    return jsonify(employees), 200

@app.route('/employees', methods=['POST'])
def add_employee():
    try:
        data = request.get_json()
        if not data or 'name' not in data or 'position' not in data:
            return jsonify({"error": "Invalid input"}), 400
        employee = {
            "id": len(employees) + 1,
            "name": data['name'],
            "position": data['position']
        }
        employees.append(employee)
        return jsonify(employee), 201
    except Exception as e:
        logging.error(f"Error adding employee: {e}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/employees/<int:employee_id>', methods=['GET'])
def get_employee(employee_id):
    employee = next((emp for emp in employees if emp['id'] == employee_id), None)
    if employee:
        return jsonify(employee), 200
    return jsonify({"error": "Employee not found"}), 404

@app.route('/employees/<int:employee_id>', methods=['PUT'])
def update_employee(employee_id):
    try:
        data = request.get_json()
        employee = next((emp for emp in employees if emp['id'] == employee_id), None)
        if not employee:
            return jsonify({"error": "Employee not found"}), 404
        if not data or 'name' not in data or 'position' not in data:
            return jsonify({"error": "Invalid input"}), 400
        employee.update({"name": data['name'], "position": data['position']})
        return jsonify(employee), 200
    except Exception as e:
        logging.error(f"Error updating employee: {e}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    global employees
    employees = [emp for emp in employees if emp['id'] != employee_id]
    return jsonify({"message": "Employee deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
