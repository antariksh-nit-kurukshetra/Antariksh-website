import React, { useState, useEffect } from "react";
import "./newgallery.css";

const categories = ["Techspardha", "Observation Sessions", "Workshops", "Trips"];

const NewGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Techspardha");
  const [images, setImages] = useState({});
  const [visibleImages, setVisibleImages] = useState(6);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  // Fetch image URLs from JSON
  useEffect(() => {
    setLoading(true); // ✅ Set loading to true when fetching starts
    fetch("/images.json")
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log("Fetched images:", data);
        setImages(data.images);
        setLoading(false); // ✅ Set loading to false after fetching
      })
      .catch(error => {
        console.error("Error loading images:", error);
        setLoading(false); // ✅ Ensure loading stops even on error
      });
  }, []);

  // Get images of selected category
  const categoryImages = images[selectedCategory] || [];

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h1 className="gallery-title">OUR GALLERY</h1>
        <p className="gallery-description">This project is created to help businesses.</p>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-tab ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading Message */}
        {loading ? (
          <div className="loading-message">Loading images...</div> // ✅ Display loading message
        ) : (
          <>
            {/* Image Grid */}
            <div className="image-grid">
              {categoryImages.slice(0, visibleImages).map((img, index) => (
                <img key={index} src={img} alt="Gallery Item" className="image-item" />
              ))}
            </div>

            {/* Load More Button */}
            {visibleImages < categoryImages.length && (
              <button
                className="load-more-btn"
                onClick={() => setVisibleImages(visibleImages + 3)}
              >
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewGallery;
