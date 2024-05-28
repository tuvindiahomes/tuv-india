import React from "react"
import "./footer.css"
import Social from "../../home/social/Social"

const Footer = () => {
  return (
    <>
    {/* <footer>
      <div className='container'>
        <div className='box'>
          <div className='logo'>
            <img src='../images/logo-light.png' alt='' />
          </div>
        </div>
      </div>
    </footer> */}
    <Social/>
      <div className='legal'>
        <span>© Copyright tuvindiahomes.com<br></br>2024 Comprehensive Property Portal in India. <br></br>All Rights Reserved. <br></br>Designed By Tarun & Jatin.</span>
      </div>
    </>
  )
}

export default Footer
