import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { Button } from "@mui/material"

function Login() {
  // we will dispatch to the reducer to send formData.user to the reducer
  const {dispatch} = useGlobalState()
  const navigate = useNavigate()
  const initialFormData = {
    user: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // code gets the user and password when button is clicked
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

    // dispatch calls setCurrentUser in the reducer with formData.user as the data
    dispatch({
      type: "setCurrentUser",
      data: formData.user
    })
    // clears the data from the form fields
    setFormData(initialFormData)
    // navigates to the employees page
    navigate("/employees")
  }

  const handleFormData = (e) => {
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
                <input type="text" name="user" id="user" value={formData.user} onChange={handleFormData}/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
              </div>
              {/* <input type="submit" value="Login" /> */}
              <Button type="submit" variant="contained">Login</Button>
            </form>
        <li>
             <Link to="/home">Back to Main Page</Link>
        </li>
    </div>
  )
}

export default Login