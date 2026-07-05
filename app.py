from flask import Flask, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

@app.route("/")
def home():
    app.logger.info("Home route accessed")
    return jsonify(status="running", message="Service is live")

@app.route("/health")
def health():
    app.logger.info("Health route accessed")
    return jsonify(status="healthy")

@app.errorhandler(404)
def not_found(error):
    app.logger.error(f"404 error: {error}")
    return jsonify(error="Not found"), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f"500 error: {error}")
    return jsonify(error="Internal server error"), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
