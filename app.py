from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes import register_routes
import logging

app = Flask(__name__)

# Configuration
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this in production
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
CORS(app)
JWTManager(app)

# Register routes
register_routes(app)

# Setup logging
logging.basicConfig(level=logging.INFO)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)