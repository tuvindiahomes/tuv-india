import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='We Are - TUV INDIA HOMES' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <p>Established in 2024, TUV India Homes, as the name suggests, specializes in providing all-around solutions to meet the various facets of residential & commercial property purchase & investment. In this short period of existence, we have established ourselves as the largest real estate advisory in India through our commitment towards building new benchmarks of excellence in the industry. Driven by our motto of Commitment, Honesty & Reliability, we continuously pursue the goal of identifying the best possible opportunities for our clients and assisting them in making smart & prudent decisions.</p>
            <Heading title='Our Services' subtitle=''/>
            <p>Whether you’re looking for office space, retail locations, land or pre-leased space we will help you find, sell or lease the right space in the right place at a fair price. Our services include transaction and advisory for leasing, acquisition, disposition, consolidation, asset management, capital markets, pre-lease and other services across office and retail.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./aboutUsImg2.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
