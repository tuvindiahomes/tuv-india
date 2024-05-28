// import React from "react"
// import Heading from "../../common/Heading"
// import "./hero.css"

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <Heading title='Search Your Next Home ' subtitle='Find new & featured property here or call us.' />

//           <form className='flex'>
//             <div className='box'>
//               <input type='text' placeholder='Location' />
//             </div>
//             <button className='btn1'>
//               <i className='fa fa-search'></i>
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hero
import React, { useState } from "react";
import Heading from "../../common/Heading";
import { list } from "../../data/Data"; // Importing the list from data.js
import "./hero.css";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = list.filter(item =>
      item.location.toLowerCase().includes(location.toLowerCase())
    );
    setSearchResults(results);
    console.log("Search results:", results);
    setLocation("");
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="Find new & featured property here or call us."
          />

          <form className="flex" onSubmit={handleSearch}>
            <div className="box">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <button type="submit" className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>

          {/* {searchResults.length > 0 && (
            <div className="search-results">
              <h2>Search Results</h2>
              <ul>
                {searchResults.map((item) => (
                  <li key={item.id}>{item.location}</li>
                  // Render the desired UI for each search result item
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </section>
    </>
  );
};

export default Hero;
