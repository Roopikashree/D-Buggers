import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recently Availed Services' subtitle='Explore our recently availed services and experience top-notch expertise in home appliance care at your doorstep.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
