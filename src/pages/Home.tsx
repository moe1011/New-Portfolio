import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>HELLO WROLD</h1>
      <Link to={"/dashboard"}>GO DASH</Link>
    </div>
  )
}

export default Home
