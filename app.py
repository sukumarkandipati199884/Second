from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)

@app.route('/', methods=['GET'])
def root():
    return jsonify({'message': 'Welcome to the Deployment Status API'}), 200

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

@app.route('/deployment/status', methods=['POST'])
def deployment_status():
    try:
        data = request.get_json()
        if not data or 'deployment_id' not in data:
            return jsonify({'error': 'Invalid input, deployment_id is required'}), 400

        deployment_id = data['deployment_id']

        # Simulated logic to check deployment status
        # In a real scenario, this would involve checking a database or external service
        status = 'success' if deployment_id == '12345' else 'failed'

        return jsonify({'deployment_id': deployment_id, 'status': status}), 200
    except Exception as e:
        logging.error(f'Error checking deployment status: {str(e)}')
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)