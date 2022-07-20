import React from 'react'
import "../stylesheet.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="nav">
        <nav>
            <ul>
              <li>
                <Link to="/staff">Staff</Link>
              </li>
              <li>
                <Link to="/login">Admin</Link>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default Home