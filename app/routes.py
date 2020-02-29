from app import app
from flask import request, jsonify, render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/send_data', methods=['POST'])
def send_data():
    data = request.get_json()
    print(data)

    return jsonify("Hello")

