import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
  const initialFormData = {
    user: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
//     axios.post("https://URL.OF.API", formData)
//     .then(response => {
//       //get token from response
//       const token  =  response.data.token;

//       //set JWT token to local
//       localStorage.setItem("token", token);

//       //set token to axios common header
//       setAuthToken(token);

// //redirect user to home page
//       window.location.href = 'whereever you want'
//     })
//     .catch(err => console.log(err));
setFormData(initialFormData)
}

  const handleUser = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  

  return (
    <div>
        <h1> Login Page</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input type="text" name="user" id="user" value={formData.user} onChange={handleUser}/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleUser}/>
              </div>
              <input type="submit" value="Login" />
            </form>
        <li>
             <Link to="/admin">Login</Link>
        </li>
    </div>
  )
}

export default Login