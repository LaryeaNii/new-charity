import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ galleryData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-title">
        <h1>Take a look through our pictures through the years</h1>
      </div>
      <div className="gallery-container">
        {galleryData.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openModal(item.image)}
          >
            <img src={item.image} alt="picture" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={selectedImage} alt="picture" />
            <p>
              {galleryData.find((item) => item.image === selectedImage)
                ?.description}
            </p>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
