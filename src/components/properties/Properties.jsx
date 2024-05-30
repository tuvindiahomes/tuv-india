// // import React from "react"
// // import Back from "../common/Back"
// // import img from "../images/properties.jpg"
// // import "./Properties.css"
// // import RecentCard from "../home/recent/RecentCard"

// // const Properties = () => {
// //   return (
// //     <>
// //       <section className='recent padding'>
// //       <Back name='Ready to move?' title='Find your new home here...' cover={img} />
// //         <div className='container'>
// //           {/* <Heading title='Properties for sale, purchase and rent' subtitle="" /> */}
// //           <RecentCard />
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// // export default Properties
// import React from "react";
// import Back from "../common/Back";
// import img from "../images/properties.jpg";
// import "./Properties.css";
// import { properties } from "../data/Data.js"; // Importing the complete list of properties
// import ScrollToTopOnMount from "../common/ScrollToTopOnMount.jsx";

// const Properties = ({ location }) => {
//   // Extracting search results from location state
//   const searchResults = location.state ? location.state.searchResults : [];

//   // If searchResults is empty, show the complete list of properties
//   const propertiesToShow = searchResults.length === 0 ? properties : searchResults;

//   return (
//     <>
//       <ScrollToTopOnMount />
//       <section className='recent padding'>
//         <Back name='Ready to move?' title='Find your new home here...' cover={img} />
//         <div className='container'>
//           <div className="properties-grid">
//             {propertiesToShow.map((property, index) => (
//               <div className='box shadow' key={index}>
//                 <div className='img'>
//                   <img src={property.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                   <div className='category flex'>
//                     <span style={{ background: property.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: property.category === "For Sale" ? "#25b579" : "#ff9800" }}>{property.category}</span>
//                     <i className='fa fa-heart'></i>
//                   </div>
//                   <h4>{property.name}</h4>
//                   <p>
//                     <i className='fa fa-location-dot'></i> {property.location}
//                   </p>
//                 </div>
//                 <div className='button flex'>
//                   <div>
//                     <button className='btn2'>{property.price}</button> <label htmlFor=''>/sqft</label>
//                   </div>
//                   <span>{property.type}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Properties;


import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Back from "../common/Back";
import img from "../images/properties.jpg";
import "./Properties.css";
import { properties } from "../data/Data.js"; // Importing the complete list of properties
import ScrollToTopOnMount from "../common/ScrollToTopOnMount.jsx";

const Properties = ({ location }) => {
  // Extracting search results from location state
  const searchResults = location.state ? location.state.searchResults : [];

  // If searchResults is empty, show the complete list of properties
  const propertiesToShow = searchResults.length === 0 ? properties : searchResults;

  return (
    <>
      <ScrollToTopOnMount />
      <section className='recent padding'>
        <Back name='Ready to move?' title='Find your new home here...' cover={img} />
        <div className='container'>
          <div className="properties-grid">
            {propertiesToShow.map((property, index) => (
              <Link to={`/property/${property.id}`} key={index} className='box shadow'>
                <div className='img'>
                  <img src={property.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span style={{ background: property.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: property.category === "For Sale" ? "#25b579" : "#ff9800" }}>{property.category}</span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{property.name}</h4>
                  <p>
                    <i className='fa fa-location-dot'></i> {property.location}
                  </p>
                </div>
                <div className='button flex'>
                  <div>
                    <button className='btn2'>{property.price}</button> <label htmlFor=''>/sqft</label>
                  </div>
                  <span>{property.type}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;


