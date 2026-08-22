from flask import Flask, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

@app.route('/')
def home():
    app.logger.info('Home endpoint was accessed')
    return 'AutoDeploy.AI GitHub Render Test', 200

@app.route('/health')
def health():
    app.logger.info('Health endpoint was accessed')
    return jsonify(status='success', message='API is healthy'), 200

@app.errorhandler(404)
def not_found(error):
    app.logger.error(f'Not found: {error}')
    return jsonify(error='Not found'), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f'Internal server error: {error}')
    return jsonify(error='Internal server error'), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)