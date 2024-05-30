

import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data/Data.js";
import "./PropertyDetails.css";
// import ReactPlayer from "react-player";

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(prop => prop.id.toString() === id);

    if (!property) {
      return <div>Property not found</div>;
    }

    return (
      <div className="property-details-container">
        <div className="property-images">
          {property.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <div className="property-info">
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <div className="property-location">
            <h3>Location:</h3>
            <p>{property.location}</p>
            {/* Google Maps Integration */}
            {/* <iframe
              title="Property Location"
              width="600"
              height="450"
              frameborder="0" style="border:0"
              src={`https://www.google.com/maps/embed/v1/place?q=${property.location}&key=YOUR_API_KEY`} allowfullscreen>
            </iframe> */}
          </div>
          <div className="property-video">
            {/* Video Integration */}
            {/* <ReactPlayer url={property.videoUrl} controls={true} /> */}
          </div>
        </div>
      </div>
    );
};

export default PropertyDetails;
