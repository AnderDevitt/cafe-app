import React from 'react'
import "../stylesheet.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
            <ul className="nav">
              <li className="navbubble">
                <Link className="home-link" to="/employees">Staff Page</Link>
              </li>
              <li className="navbubble">
                <Link className="home-link" to="/login">Admin</Link>
              </li>
            </ul>
    </div>
  )
}

export default Home