# Notes
Github located at https://github.com/Markar/RareImages
I used create-react-app to bootstrap rare-ui

# To run the application
git clone https://github.com/Markar/RareImages.git
cd RareImages/rare-ui
npm install
npm run start-api 

open another terminal at rare-ui path
npm run start
* With virtualenv, I don't think you have to install the dependencies manually for the api.
* There is a readme in the rare-api folder with instructions for setting up the virtualenv

# Where I would spend more time
- I would install SASS and refactor the css files, extract variables to a separate file, and clean up the styles
- Modify the get_images() api to crawl /static/images to populate the list with ids
- Add Jest and Enzyme, start writing unit tests for the React components
- Separate out the header, body, and footer into components
- Add more styles for navigating the images
