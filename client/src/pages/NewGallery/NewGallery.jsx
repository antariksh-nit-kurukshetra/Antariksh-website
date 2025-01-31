import React, { useState } from "react";
import "./newgallery.css";

const categories = ["Corporate Apparel", "Personal/Family", "School", "Fashion"];
const images = [
  'https://courses.lumenlearning.com/astronomy/wp-content/uploads/sites/1095/2017/07/astronomy-cover1.jpg',
  'https://courses.lumenlearning.com/astronomy/wp-content/uploads/sites/1095/2017/07/astronomy-cover1.jpg',
  'https://courses.lumenlearning.com/astronomy/wp-content/uploads/sites/1095/2017/07/astronomy-cover1.jpg',
  'https://courses.lumenlearning.com/astronomy/wp-content/uploads/sites/1095/2017/07/astronomy-cover1.jpg',
  'https://courses.lumenlearning.com/astronomy/wp-content/uploads/sites/1095/2017/07/astronomy-cover1.jpg',
  'https://courses.lumenlearning.com/astronomy/wp-content/uploads/sites/1095/2017/07/astronomy-cover1.jpg',
];

const NewGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Corporate Apparel");
  const [visibleImages, setVisibleImages] = useState(6);

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

        {/* Image Grid */}
        <div className="image-grid">
          {images.slice(0, visibleImages).map((img, index) => (
            <img key={index} src={img} alt="Gallery Item" className="image-item" />
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < images.length && (
          <button
            className="load-more-btn"
            onClick={() => setVisibleImages(visibleImages + 3)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default NewGallery;
