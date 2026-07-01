from flask import Flask, jsonify
from routes import register_routes

app = Flask(__name__)

# Register routes
def create_app():
    register_routes(app)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000)