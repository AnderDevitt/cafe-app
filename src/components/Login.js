import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
        <h1> Login Page</h1>
        <h2>Username: </h2>
        <h2>Password: </h2>
        <li>
             <Link to="/admin">Login</Link>
        </li>
    </div>
  )
}

export default Login