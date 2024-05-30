import React from "react";
import { list } from "../../data/Data";
import "./RecentCard.css"; // Import your CSS file for styling

const RecentCard = () => {
  const handleHeartClick = (index) => {
    // Handle click event, e.g., toggle favorite status
    console.log("Heart clicked for index", index);
  };

  return (
    <div className="recent-card-container">
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={cover} alt={name} />
            </div>
            <div className="card-details">
              <div className="category">
                <span
                  className={`category-tag ${
                    category === "For Sale" ? "sale" : "rent"
                  }`}
                >
                  {category}
                </span>
                <div className="heart-container">
                  <i className="fa fa-heart" onClick={() => handleHeartClick(index)}></i>
                </div>
              </div>
              <h4>{name}</h4>
              <p>
                <i className="fa fa-location-dot"></i> {location}
              </p>
            </div>
            <div className="card-footer">
              <div>
                <button className="price-btn">{price}</button>{" "}
                <span className="price-label">/sqft</span>
              </div>
              <span className="type">{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
