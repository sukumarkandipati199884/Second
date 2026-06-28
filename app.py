from flask import Flask, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

@app.route('/health', methods=['GET'])
def health_check():
    try:
        response = {'status': 'healthy'}
        app.logger.info('Health check successful')
        return jsonify(response), 200
    except Exception as e:
        app.logger.error(f'Error during health check: {e}')
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
