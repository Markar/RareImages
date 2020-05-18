import time
from flask import Flask

import os, json

app = Flask(__name__, static_url_path='/static')

@app.route('/time')
def get_current_time():
    print('hitting get_current_time()')
    return {'time': time.time()}


@app.route('/images', methods=['GET'])
def get_images():  
  # json_path = 'static/images'
  imageIds = [
    'GSFC_20171208_Archive_e001465', 
    'hubble-sees-the-wings-of-a-butterfly-the-twin-jet-nebula_20283986193_o',
    'PIA04215', 
    'PIA04216']

  # json_files = [pos_json for pos_json in os.listdir(json_path) if pos_json.endswith('.json')]
  # print(json_files)
  # imageJson = {}
  # for file in glob.glob("static/images/*.json"):
  #   with open('static/images/PIA04216_orig.json') as f: 
  #     data = json.load(f)
  #     imageData.append(data)
  #     print('file', file)
    # imageJson.append(file.)

  imageData = []
  for id in imageIds:
    with open('static/images/'+id+'_orig.json') as f:
      d = json.load(f)
      imageData.append(d)
  
  return {
   "images": imageData
  }