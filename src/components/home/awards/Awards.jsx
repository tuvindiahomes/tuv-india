import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
      <section className='awards padding'>
        <div className='container'>
        <Heading title='TUV INDIA HOMES' subtitle='Reach Us At' />
          <div className='content grid4 mtop'>
          <div className='box'>
              <div className='icon'>
                <i class='fa fa-address-card'></i>
              </div>
              <h1>T3-A1604, NX-ONE, Greater Noida West</h1>
              <p>Near Gaur Chowk</p>
              <br></br>
            </div>
          </div>
          <Heading title='Directly Call Us On' subtitle='Or' />
          <div className='content grid4 mtop'>
            <div className='box'>
              <div className='icon'>
                <a href = 'tel:+911206052476'><i class='fa fa-phone'></i></a>
              </div>
              <h1>+91-120-6052-476</h1>
              <p>Landline</p>
            </div>
            <div className='box'>
              <div className='icon'>
                <a href = 'tel:+919711671152'><i class='fa fa-phone'></i></a>
              </div>
              <h1>+91-9711-67-1152</h1>
              <p>Mobile</p>
            </div>
            <div className='box'>
              <div className='icon'>
                <a href = 'tel:+918800127535'><i class='fa fa-phone'></i></a>
              </div>
              <h1>+91-8800-12-7535</h1>
              <p>Mobile</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Awards
