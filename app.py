from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# In-memory storage for student records
students = [
    {'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'course': 'Computer Science', 'enrollment_year': 2020},
    {'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'course': 'Mathematics', 'enrollment_year': 2019}
]

# Helper function to find a student by ID
def find_student(student_id):
    return next((student for student in students if student['id'] == student_id), None)

@app.route('/', methods=['GET'])
def root():
    return jsonify({'message': 'Welcome to the Student Records API'}), 200

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students), 200

@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student = find_student(id)
    if student:
        return jsonify(student), 200
    else:
        return jsonify({'error': 'Student not found'}), 404

@app.route('/students', methods=['POST'])
def create_student():
    if not request.json or not all(key in request.json for key in ['name', 'email', 'course', 'enrollment_year']):
        return jsonify({'error': 'Missing required fields'}), 400

    new_id = max(student['id'] for student in students) + 1 if students else 1
    new_student = {
        'id': new_id,
        'name': request.json['name'],
        'email': request.json['email'],
        'course': request.json['course'],
        'enrollment_year': request.json['enrollment_year']
    }
    students.append(new_student)
    return jsonify(new_student), 201

@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    student = find_student(id)
    if not student:
        return jsonify({'error': 'Student not found'}), 404

    if not request.json:
        return jsonify({'error': 'Missing required fields'}), 400

    student.update({
        'name': request.json.get('name', student['name']),
        'email': request.json.get('email', student['email']),
        'course': request.json.get('course', student['course']),
        'enrollment_year': request.json.get('enrollment_year', student['enrollment_year'])
    })
    return jsonify(student), 200

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = find_student(id)
    if not student:
        return jsonify({'error': 'Student not found'}), 404

    students.remove(student)
    return jsonify({'message': 'Student deleted'}), 200

if __name__ == '__main__':
    app.run(debug=True)