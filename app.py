from flask import Flask, jsonify
from flask_cors import CORS
import logging

# Initialize the Flask application
app = Flask(__name__)

# Enable CORS
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Health check route
@app.route('/health', methods=['GET'])
def health_check():
    app.logger.info('Health check endpoint was called')
    return jsonify(status='healthy'), 200

# Error handling
@app.errorhandler(404)
def not_found_error(error):
    app.logger.error(f'Not found: {error}')
    return jsonify(error='Not found'), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f'Internal server error: {error}')
    return jsonify(error='Internal server error'), 500

# Entry point for Gunicorn
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)