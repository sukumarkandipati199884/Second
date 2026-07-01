from flask import jsonify, request
from flask_login import login_user, logout_user, login_required
from models import User, Book, db


def init_routes(app):
    @app.route('/api/login', methods=['POST'])
    def login():
        data = request.json
        user = User.query.filter_by(username=data.get('username')).first()
        if user and user.check_password(data.get('password')):
            login_user(user)
            return jsonify({'message': 'Logged in successfully'}), 200
        return jsonify({'error': 'Invalid credentials'}), 401

    @app.route('/api/logout', methods=['POST'])
    @login_required
    def logout():
        logout_user()
        return jsonify({'message': 'Logged out successfully'}), 200

    @app.route('/api/books', methods=['GET'])
    def get_books():
        books = Book.query.all()
        return jsonify([book.to_dict() for book in books]), 200

    @app.route('/api/books', methods=['POST'])
    @login_required
    def add_book():
        data = request.json
        new_book = Book(title=data.get('title'), author=data.get('author'))
        db.session.add(new_book)
        db.session.commit()
        return jsonify(new_book.to_dict()), 201

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'error': 'Not found'}), 404

    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({'error': 'Internal server error'}), 500
