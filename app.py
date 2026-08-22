from flask import Flask, jsonify, render_template
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

@app.route('/')
def index():
    app.logger.info('Rendering index page')
    return render_template('index.html')

@app.route('/health')
def health():
    app.logger.info('Health check endpoint accessed')
    return jsonify(status='healthy'), 200

@app.errorhandler(404)
def not_found(error):
    app.logger.error(f'404 error: {error}')
    return jsonify(error='Not Found'), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f'500 error: {error}')
    return jsonify(error='Internal Server Error'), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)