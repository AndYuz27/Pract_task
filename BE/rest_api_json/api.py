from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin
import json

with open('data.json', 'r', encoding="utf-8") as kkk:
    ddddd = json.load(kkk), 200, {'ContentType':'application/json'} 




app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def index():

    return "Sample text"


@app.route('/prods' , methods=['GET'])
def ddd():
    result = "result"
    res = jsonify({"data" : ddddd})
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res

    # return jsonify({"data" : ddddd})

if __name__ == '__main__':
    app.run(debug=True)