import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import imgAbout from "../images/about.jpg"
import "./about.css"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import ScrollToTopOnMount from "../common/ScrollToTopOnMount.jsx";
import Awards from "../home/awards/Awards"
import Contact from "../contact/Contact.jsx"

const About = () => {
  return (
    <>
    <ScrollToTopOnMount />
      <section className='about'>
        <Back name='About Us' title='We Are - TUV INDIA HOMES' cover={imgAbout} />
        <div className='container flex mtop'>
          <div className='left row'>
            <p>Established in 2024, TUV India Homes, as the name suggests, specializes in providing all-around solutions to meet the various facets of residential & commercial property purchase & investment. In this short period of existence, we have established ourselves as the largest real estate advisory in India through our commitment towards building new benchmarks of excellence in the industry. Driven by our motto of Commitment, Honesty & Reliability, we continuously pursue the goal of identifying the best possible opportunities for our clients and assisting them in making smart & prudent decisions.</p>
            <Heading title='Our Services' subtitle=''/>
            <p>Whether you’re looking for office space, retail locations, land or pre-leased space we will help you find, sell or lease the right space in the right place at a fair price. Our services include transaction and advisory for leasing, acquisition, disposition, consolidation, asset management, capital markets, pre-lease and other services across office and retail.</p>
          </div>
          <div className='right row'>
            <img src='./aboutUsImg2.jpg' alt='' />
          </div>
        </div>
      </section>
      <section className='services mb'>
      {/* <Back name='Services' title='Currently we are dealing in ...' cover={imgService} /> */}
      <Heading title='Currently we are dealing in' subtitle=''/>
      <div className='featured container'>
        <FeaturedCard />
      </div>
      </section>
      <section className='services mb'>
      {/* <Back name='Connect With US' title='Fill out this form' cover={imgForm} /> */}
      <Awards/>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Reach Us At' subtitle='OR' />
          <div className='content grid4 mtop'>
            <div className='box'>
              <div className='icon'>
                <i class='fa fa-address-card'></i>
              </div>
              <h1>TUV INDIA HOMES</h1>
              <p>T3-A1604, NX-ONE, Greater Noida West</p>
            </div>
          </div>
        </div>
      </section>
      <div className='featured container'>
      <Heading title='Connect with us' subtitle='Fill out this form'/>
        <Contact />
      </div>
      </section>
      <section></section>
  </>
  )
}

export default About
