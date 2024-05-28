import React from "react"
import Back from "../common/Back"
import img from "../images/properties.jpg"
import "./Properties.css"
import RecentCard from "../home/recent/RecentCard"

const Properties = () => {
  return (
    <>
      <section className='recent padding'>
      <Back name='Ready to move?' title='Find your new home here...' cover={img} />
        <div className='container'>
          {/* <Heading title='Properties for sale, purchase and rent' subtitle="" /> */}
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Properties
