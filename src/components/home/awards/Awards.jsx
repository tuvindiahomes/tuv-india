import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Directly Call Us On' subtitle='We are always ready to help you out' />
          <div className='content grid4 mtop'>
            <div className='box'>
              <div className='icon'>
                <a href = 'tel:+1212001201200'><i class='fa fa-phone'></i></a>
              </div>
              <h1>+12-1200-120-1200</h1>
              <p>Landline</p>
            </div>
            <div className='box'>
              <div className='icon'>
                <a href = 'tel:+919711671152'><i class='fa fa-phone'></i></a>
              </div>
              <h1>+91-9711-67-1152</h1>
              <p>Landline</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Awards
