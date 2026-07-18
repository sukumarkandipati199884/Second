from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

employees = []

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Welcome to the Employee Management API'}), 200

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

@app.route('/employees', methods=['GET'])
def get_employees():
    return jsonify({'employees': employees}), 200

@app.route('/employees', methods=['POST'])
def add_employee():
    try:
        data = request.get_json()
        if not data or 'name' not in data or 'position' not in data:
            return jsonify({'error': 'Invalid input'}), 400
        employee = {
            'id': len(employees) + 1,
            'name': data['name'],
            'position': data['position']
        }
        employees.append(employee)
        return jsonify(employee), 201
    except Exception as e:
        logging.error(f"Error adding employee: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/employees/<int:employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    global employees
    employees = [emp for emp in employees if emp['id'] != employee_id]
    return jsonify({'message': 'Employee deleted'}), 200

if __name__ == '__main__':
    app.run(debug=True)