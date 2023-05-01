import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>You got the travel plans, we got the travel bikes.</h1>
        <p>Add adventure to your life by joining the #BikeWorld movement. Rent the perfect bike to make your perfect road trip.</p>
        <Link to="bikes">Find your bike</Link>
    </div>
    
  )
}

export default Home