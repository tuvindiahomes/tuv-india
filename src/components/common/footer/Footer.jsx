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
        <span>© Copyright tuvindiahomes.com. 2024 Comprehensive Property Portal in India. All Right Reserved. Designd By Jatin.</span>
      </div>
    </>
  )
}

export default Footer
