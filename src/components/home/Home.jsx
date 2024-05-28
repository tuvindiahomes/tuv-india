import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import WhatsAppButton from "./WhatsAppButton"
import ScrollToTopOnMount from "../common/ScrollToTopOnMount.jsx";

const Home = () => {
  return (
    <>
    <ScrollToTopOnMount />
      <Hero />
      <Featured />
      <Awards />
      <Recent />
      <Location />
      {/* <Team /> */}
      {/* <Price /> */}
      {/* <WhatsAppButton/> */}
    </>
  )
}

export default Home
