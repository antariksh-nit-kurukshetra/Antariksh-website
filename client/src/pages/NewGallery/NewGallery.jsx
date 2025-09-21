import React, { useState, useEffect } from "react";
import "./newgallery.css";

const categories = ["Techspardha", "Observation Sessions", "Workshops","Events", "Trips"];

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
  console.log(categoryImages);  // Log the images for the selected category
  console.log("Category images for", selectedCategory, ":", categoryImages);


  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h1 className="gallery-title">OUR GALLERY</h1>
        <p className="gallery-description">Welcome to our gallery, where you can explore the highlights of our club’s events, workshops, and unforgettable trips! From hands-on workshops that spark creativity to thrilling trips that broaden our horizons, this space captures the essence of our vibrant community. Whether it's an enlightening workshop, a team-building adventure, or a memorable trip, our gallery reflects the spirit of learning, growth, and camaraderie. Join us in reliving these amazing moments and stay tuned for more exciting experiences ahead!</p>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-tab ${selectedCategory === category ? "active" : ""}`}
              onClick={() => {
                console.log("Selected category:", category);  
                setSelectedCategory(category)}}
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
