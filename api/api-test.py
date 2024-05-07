from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuración de la base de datos (user:password@localhost/database)
MASTER_USER = 'root'
MASTER_PASSWORD = 'root'
print(f'{MASTER_USER} test {MASTER_PASSWORD}')

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{MASTER_USER}:{MASTER_PASSWORD}@localhost/flask'
db = SQLAlchemy(app)

# Definición del modelo de la tabla 'users'
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))

    def __repr__(self):
        return f'<Users {self.name}>'

# Ruta para obtener todos los usuarios
@app.route('/users', methods=['GET'])
def get_users():
    users = Users.query.all()
    output = []
    for user in users:
        user_data = {'id': user.id, 'name': user.name}
        output.append(user_data)
    return jsonify({'users': output})

# Ruta para obtener un usuario por su ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    users = Users.query.get_or_404(user_id)
    user_data = {'id': users.id, 'name': users.name}
    return jsonify(user_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
