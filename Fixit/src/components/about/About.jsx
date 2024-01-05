import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to Fixit – Your Trusted Partner in Home Appliance Care. We specialize in delivering exceptional repair and maintenance services for all your household appliances. </p>
            <p>Our skilled technicians are well-equipped to address issues with refrigerators, washing machines, ovens, and air conditioners, ensuring efficient and precise solutions for every problem.</p>
            <p>At Fixit, we prioritize reliability and customer satisfaction. Our commitment to excellence means you can trust us to handle your appliances with the utmost care. Experience seamless repairs and timely service that transforms your home into a hassle-free haven.</p>
            <p>Discover the difference with Fixit – where expertise meets appliance care, offering you peace of mind and the assurance that your household devices are in expert hands.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right-row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
