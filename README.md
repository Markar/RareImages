# Notes
Github located at https://github.com/Markar/RareImages
I used create-react-app to bootstrap rare-ui

# To run the application
- git clone https://github.com/Markar/RareImages.git
- Install virtualenv on the system using pip or pip3 install virtualenv

- cd rare-api
- python -m venv venv
- venv/Scripts/activate
- pip install flask flask-cors python-dotenv
- cd RareImages/rare-ui
- npm install
- npm run start

- open another terminal at RareImages/rare-ui
- npm run start-api

# Mac 
- cd rare-api
- python3 install virtualenv
- python3 -m venv venv
- source ./venv/bin/activate
- pip3 install flask flask-cors python-dotenv
- flask run (has to be run from the terminal running venv, and run from rare-api root)

- open new terminal at rare-ui
- npm run start


# Where I would spend more time
- I would install SASS and refactor the css files, extract variables to a separate file, and clean up the styles
- Modify the get_images() api to crawl /static/images to populate the list with ids
- Add Jest and Enzyme, start writing unit tests for the React components
- Separate out the header, body, and footer into components
- Add more styles for navigating the images
