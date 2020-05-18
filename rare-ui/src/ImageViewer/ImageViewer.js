import React from 'react';
import './ImageViewer.css';

function handlePreviousClick(setIndex, index) {
  let newIndex = index;
  newIndex--;
  if (newIndex < 0) {
    newIndex = 3;
  }

  setIndex(newIndex);
}

function handleNextClick(setIndex, index) {
  let newIndex = index;
  newIndex++;
  if (newIndex > 3) {
    newIndex = 0;
  }

  setIndex(newIndex);
}

function renderAdditionalCredits(image) {
  if (image.secondaryCreatorCredit) {
    return (
      <>
        <div className='image--additionalCredits'>
          <div>Additional Credits</div>
          <div>
            {image.secondaryCreatorCredit}
          </div>

        </div>

      </>);
  } else {
    return (<div></div>);
  }
}

function renderImage(image, setIndex, index) {
  if (image) {
    let isrc = `static/images/${image.nasaId}_orig.jpg`;
    return (
      <>
        <div className="image--title">{image.nasaId}</div>
        <div className="image--date">
          {image.dateCreated}
        </div>

        <img className='image--size' src={isrc} alt='image' />

        <div className='image--buttons'>
          <button className='left previous-btn' onClick={() => handlePreviousClick(setIndex, index)}>Previous</button>
          <button className='right next-btn' onClick={() => handleNextClick(setIndex, index)}>Next</button>
        </div>


        <div>
          <div className='image--description'>
            {image.description}
          </div>
          {renderAdditionalCredits(image)}
        </div>
      </>
    )
  } else {
    return '';
  }
}

function ImageViewer(props) {

  if (!props) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <>
      <div className="image--viewer">
        {renderImage(props.image, props.setIndex, props.index)}
      </div>
    </>
  );
}

export default ImageViewer;
