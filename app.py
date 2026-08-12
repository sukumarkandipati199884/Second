from flask import Flask, jsonify, request, abort
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Sample in-memory data
students = [
    {'id': 1, 'name': 'John Doe', 'email': 'john.doe@example.com', 'course': 'Computer Science', 'enrollment_year': 2020},
    {'id': 2, 'name': 'Jane Smith', 'email': 'jane.smith@example.com', 'course': 'Mathematics', 'enrollment_year': 2019}
]

# Configure logging
logging.basicConfig(level=logging.INFO)

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
    student = next((s for s in students if s['id'] == student_id), None)
    if student is None:
        abort(404, description='Student not found')
    return jsonify(student), 200

@app.route('/students', methods=['POST'])
def create_student():
    if not request.json or not all(k in request.json for k in ('name', 'email', 'course', 'enrollment_year')):
        abort(400, description='Missing required fields')
    new_id = max(s['id'] for s in students) + 1 if students else 1
    student = {
        'id': new_id,
        'name': request.json['name'],
        'email': request.json['email'],
        'course': request.json['course'],
        'enrollment_year': request.json['enrollment_year']
    }
    students.append(student)
    return jsonify(student), 201

@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    student = next((s for s in students if s['id'] == student_id), None)
    if student is None:
        abort(404, description='Student not found')
    if not request.json:
        abort(400, description='Missing request body')
    student.update({
        'name': request.json.get('name', student['name']),
        'email': request.json.get('email', student['email']),
        'course': request.json.get('course', student['course']),
        'enrollment_year': request.json.get('enrollment_year', student['enrollment_year'])
    })
    return jsonify(student), 200

@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    student = next((s for s in students if s['id'] == student_id), None)
    if student is None:
        abort(404, description='Student not found')
    students.remove(student)
    return jsonify({'result': 'Student deleted'}), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': str(error)}), 404

@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': str(error)}), 400

if __name__ == '__main__':
    app.run(debug=True)