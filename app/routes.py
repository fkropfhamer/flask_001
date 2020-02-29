from app import app
from flask import request, jsonify, render_template, abort

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

@app.route('/question', methods=['POST'])
def question():
    try:
        data = request.get_json()

        print(data)

        question = data['question']
        length = len(question)
        
        if (length == 0):
            raise ValueError("question can´t be empty!")

        if (length % 2 == 0):
            return jsonify("Yes")

        return jsonify("No")
    except:
        abort(400)


