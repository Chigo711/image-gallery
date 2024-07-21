import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageItem from "./ImageItem";
const AccessKey = "be_Niyz0PD1renhx7QMY-I6Gtyv6hur5zTRmolJtUv0"

function ImageGallery() {

    const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=12&client_id=${AccessKey}`
        );
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }


  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGallery;

// be_Niyz0PD1renhx7QMY-I6Gtyv6hur5zTRmolJtUv0
