import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Link to="/services">
      <button>About</button>
      </Link>
    </div>
  )
}

export default Home
