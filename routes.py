from flask import Blueprint, jsonify

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200