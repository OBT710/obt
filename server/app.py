from flask import Flask, jsonify, render_template
from flask_cors import CORS
app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
CORS(app)

@app.route('/')
def HelloWorld():
    # return jsonify(example)
    return render_template('index.html')

@app.route('/personal_details')
def personal_details():
    return jsonify(example)

example = {
    "last_name": {
        'value': None,
        'type': "str",
        'display':"family name",
        'key': "last_name",
        'choices': None
    },
     "home_town": {
        'value': None,
        'type': "str",
        'display': "address",
        'key': "home_town",
        'choices': None
    }
}
