import React, { useState , useEffect} from 'react';
import './Gallery.css';
import supabase from "./config/supabaseclient";






const Gallery = () => {

  const [fetchError, setFetchError] = useState(null);
  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery')
          .select();

        if (error) {
          setFetchError('Could not fetch pictures');
          console.log(error);
        } else {
          setGallery(data || []);
          setFetchError(null);
        }
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchGallery();
  }, []);

  


  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgurl) => {
    setSelectedImage(imgurl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-title">
        {fetchError && <p>{fetchError}</p>}
        <h1>Take a look through our pictures through the years</h1>
      </div>
      <div className="gallery-container">
        {gallery.map(item => (
          <div
            className="gallery-item"
            key={gallery.id}
            onClick={() => openModal(item.imgurl)}
          >
            <img src={item.imgurl} alt="picture" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={selectedImage} alt="picture" />
            <p>
              {gallery.find((item) => item.imgurl === selectedImage)
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
