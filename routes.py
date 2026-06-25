from flask import jsonify, request

# Sample data
reservations = []

# Initialize routes
def init_routes(app):
    @app.route('/api/reservations', methods=['GET'])
    def get_reservations():
        return jsonify(reservations), 200

    @app.route('/api/reservations', methods=['POST'])
    def create_reservation():
        try:
            data = request.get_json()
            # Validate data
            if not data or not 'customer_name' in data or not 'table_number' in data:
                return jsonify({'error': 'Invalid data'}), 400
            reservation = {
                'id': len(reservations) + 1,
                'customer_name': data['customer_name'],
                'table_number': data['table_number'],
                'status': 'booked'
            }
            reservations.append(reservation)
            return jsonify(reservation), 201
        except Exception as e:
            app.logger.error(f'Error creating reservation: {e}')
            return jsonify({'error': 'Internal Server Error'}), 500

    @app.route('/api/reservations/<int:reservation_id>', methods=['GET'])
    def get_reservation(reservation_id):
        reservation = next((r for r in reservations if r['id'] == reservation_id), None)
        if reservation:
            return jsonify(reservation), 200
        return jsonify({'error': 'Reservation not found'}), 404

    @app.route('/api/reservations/<int:reservation_id>', methods=['DELETE'])
    def delete_reservation(reservation_id):
        global reservations
        reservations = [r for r in reservations if r['id'] != reservation_id]
        return jsonify({'message': 'Reservation deleted'}), 200