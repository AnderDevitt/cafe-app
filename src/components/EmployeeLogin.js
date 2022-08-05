import React from 'react'
import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Typography } from "@mui/material"
// import { employeeSignIn } from '../services/authServices';
import { signIn } from '../services/authServices';


function EmployeeLogin({employee}) {
  // const { dispatch} = useGlobalState()
  //const { clockedOnWorker} = store
  // const navigate = useNavigate()
  // we will dispatch to the reducer to send formData.user to the reducer
  // const initialWorker = {}
  // const [worker, setWorker] = useState(initialWorker)
  
 
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
    
    
  }


  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
        <Typography variant="h7">Enter your username and PIN number then click Verify.</Typography>
            <form onSubmit={handleSubmit}>
              <div>
                <InputLabel>Username:</InputLabel>
                <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
              </div>
              
              <div>
                <InputLabel>PIN:</InputLabel>
                <TextField type="password" name="password" id="password" inputProps={{ maxLength: 4, inputMode: 'numeric', pattern: '[0-9]*' }} value={formData.password} onChange={handleFormData}/>
              </div>
              
              <Button type="submit" variant="contained">Verify</Button>
            </form>
    </div>
  )
}

export default EmployeeLogin