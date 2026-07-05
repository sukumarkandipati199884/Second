from flask import Flask, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

@app.route('/', methods=['GET'])
def root():
    app.logger.info('Root endpoint was accessed')
    return jsonify({'message': 'Welcome to the Flask API!'}), 200

@app.route('/health', methods=['GET'])
def health():
    app.logger.info('Health endpoint was accessed')
    return jsonify({'status': 'healthy'}), 200

@app.errorhandler(404)
def not_found(error):
    app.logger.error('404 error: %s', error)
    return jsonify({'error': 'Not Found'}), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error('500 error: %s', error)
    return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)