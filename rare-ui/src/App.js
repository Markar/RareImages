import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import ImageViewer from './ImageViewer/ImageViewer';
import './App.css';

function App() {    
  let [images, setImages] = useState([]);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/images').then(res => res.json()).then(data => {
      //setCurrentTime(data.time);
      console.log('data', data.images);
      setImages(data.images);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">         
        Nasa Images
      </header>
      
      <ImageViewer image={images[index]} setIndex={setIndex} index={index}/>      
      

      <div className="App-body">
        
      </div>
  </div>
  );
}

export default App;
