from flask import Flask, jsonify, request
from flask_cors import CORS
import connection

# Creamos una instancia de Flask
app = Flask(__name__)

@app.route("/calls_d", methods=["POST"])
def llamadas_distribuidas():
    data = request.json
    try:
        results = connection.filtrado(data)
        return jsonify(results)
    except Exception as e:
        print("Error:", e)
        # Retorna una lista vacía en caso de error o si no se cumple ninguna condición
        return jsonify(e)


CORS(app)
if __name__ == "__main__":
    # Ejecutamos la aplicación en el puerto 5000
    app.run(debug=True)
