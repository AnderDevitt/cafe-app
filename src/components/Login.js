import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { signIn } from '../services/authServices';

function Login() {
  // we will dispatch to the reducer to send formData.user to the reducer
  const {dispatch} = useGlobalState()
  const navigate = useNavigate()
  const initialFormData = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // code gets the user and password when button is clicked
    
    signIn(formData)
    .then(user => {
      console.log(user)
      if (user.error) {
        console.log("user.error", user.error)
        setError(user.error)
      } else {
        setError(null)
        sessionStorage.setItem("username", user.username)
        sessionStorage.setItem("token", user.jwt)
        // dispatch calls setLoggedInUser in the reducer with formData.user as the data
        dispatch({
          type: "setLoggedInUser",
          data: user.username
        })
        dispatch({
          type: "setToken",
          data: user.jwt
        })

        // clears the data from the form fields
        setFormData(initialFormData)
        if (user.username === "admin") {
          navigate("/admin")
        } else {
          navigate("/cafe")
        }  
      }
    })
    .catch(e => {console.log(e)})
      
      
      
    
  }

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  

  return (
    <div>
        <Typography variant="h4">Login</Typography>
        {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <InputLabel>Username:</InputLabel>
                <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
              </div>
              
              <div>
                <InputLabel>Password:</InputLabel>
                <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
              </div>
              
              <Button type="submit" variant="contained">Login</Button>
            </form>
    </div>
  )
}

export default Login