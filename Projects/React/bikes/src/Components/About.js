import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from "./Assests/about-hero.jpg"

function About() {
  return (
    <div className='about-page-container'>
      <img src={bgImg} className="about-hero-image" alt='about-hero'/>
      <div className='about-page-content'>
        <h1>Don't travel in a regular bike when you can experience an adventure bike.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel bike rental. Out bikes are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
        <p>Our Team is full of Bike enthusiasts who know firsthand the magic of touring the world on 2 wheels</p>
      </div>
      <div className='about-page-cta'>
        <h2>Your destination is waiting. <br/> Your bike is ready.</h2>
        <Link className='link-button' to="/bikes">Explore our bikes</Link>
      </div>
    </div>
  )
}

export default About