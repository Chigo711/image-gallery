function ImageItem({ image }) {
  return (
    <div className="image-item">
      <img src={image.urls.small} alt={image.alt_description} />
      <p>{image.alt_description || "No description available"}</p>
      <a href={image.links.html} target="_blank" rel="noopener noreferrer">
        View on Unsplash
      </a>
    </div>
  );
}

export default ImageItem;
