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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // code gets the user and password when button is clicked
    
    signIn(formData)
    .then(user => {
      sessionStorage.setItem("username", user.username)
      // console.log(user)
      // dispatch calls setCurrentUser in the reducer with formData.user as the data
      dispatch({
        type: "setLoggedInUser",
        data: user.username
      })
      // clears the data from the form fields
      setFormData(initialFormData)
      if (user.username === "admin")
      // navigates to the employees page for staff terminal
      navigate("/admin")
        else
      // navigates to the admin page for manager's PC  
      navigate("/shifts")  
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