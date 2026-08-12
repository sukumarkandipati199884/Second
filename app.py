from flask import Flask, jsonify, request, abort
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

@app.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = find_student(student_id)
    if student is None:
        abort(404, description="Student not found")
    return jsonify(student), 200

@app.route('/students', methods=['POST'])
def create_student():
    if not request.json or not all(key in request.json for key in ['name', 'email', 'course', 'enrollment_year']):
        abort(400, description="Missing required fields")
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

@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    student = find_student(student_id)
    if student is None:
        abort(404, description="Student not found")
    if not request.json:
        abort(400, description="Missing required fields")
    student.update({
        'name': request.json.get('name', student['name']),
        'email': request.json.get('email', student['email']),
        'course': request.json.get('course', student['course']),
        'enrollment_year': request.json.get('enrollment_year', student['enrollment_year'])
    })
    return jsonify(student), 200

@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    student = find_student(student_id)
    if student is None:
        abort(404, description="Student not found")
    students.remove(student)
    return jsonify({'result': 'Student deleted'}), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': str(error)}), 404

@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': str(error)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)