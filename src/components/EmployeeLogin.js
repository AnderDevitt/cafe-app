import React from 'react'
import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { employeeSignIn } from '../services/authServices';


function Login({employee}) {
  // we will dispatch to the reducer to send formData.user to the reducer
  //const {dispatch} = useGlobalState()
  const { dispatch} = useGlobalState()
  //const { clockedOnWorker} = store
  // const navigate = useNavigate()
  const initialFormData = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // code gets the user and password when button is clicked
    
    employeeSignIn(formData)
    .then(({username, jwt}) => {
      sessionStorage.setItem(`${username}`, username)
      sessionStorage.setItem("token", jwt)
      
      // dispatch calls setCurrentUser in the reducer with formData.user as the data
      dispatch({
        type: "setWorker",
        data: username
      })
      dispatch({
        type: "setToken",
        data: jwt
      })
      // clears the data from the form fields
      setFormData(initialFormData)
      // navigate("/shifts")
      
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
        <Typography variant="h6">Login</Typography>
            <form onSubmit={handleSubmit}>
              <div>
                <InputLabel>Username:</InputLabel>
                <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
              </div>
              
              <div>
                <InputLabel>PIN:</InputLabel>
                <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
              </div>
              
              <Button type="submit" variant="contained">Verify</Button>
            </form>
    </div>
  )
}

export default Login