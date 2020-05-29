import time
from flask import Flask

import os, json

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
	return 'Hello, Flask!'

@app.route('/images', methods=['GET'])
def get_images():  
  # json_path = 'static/images'
  # Ideally these ids would be parsed from the .json files, but given the time limit, this should work.
  imageIds = [
    'GSFC_20171208_Archive_e001465', 
    'hubble-sees-the-wings-of-a-butterfly-the-twin-jet-nebula_20283986193_o',
    'PIA04215', 
    'PIA04216']

  imageData = []
  for id in imageIds:
    with open('static/images/'+id+'_orig.json') as f:
      d = json.load(f)
      imageData.append(d)
  
  return {
   "images": imageData
  }