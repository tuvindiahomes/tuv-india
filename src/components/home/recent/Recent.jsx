import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Properties' subtitle="Discover the fresh listing, ranging from cozy apartments to luxurious estates, meticulously curated to match diverse preferences and lifestyles." />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
