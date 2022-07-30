import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Checkbox, Typography, FormGroup, FormControlLabel } from "@mui/material"
import { signUp } from "../services/authServices"


const NewRoleForm = () => {
  // we will dispatch to the reducer to send formData.user to the reducer
  //const {dispatch} = useGlobalState()
  const navigate = useNavigate()

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_admin: "false"
  }
  

  const [formData, setFormData] = useState(initialFormData)
  const [checked, setChecked] = React.useState("true");


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // code gets the user and password when button is clicked
    
    signUp(formData)
    // dispatch calls setCurrentUser in the reducer with formData.user as the data
    // dispatch({
    //   type: "createNewRole",
    //   data: formData
    // })
    // clears the data from the form fields
    setFormData(initialFormData)
    // navigates to the admin page
    navigate("/admin")
  }

  // Assign the input values from most form elements to formData
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  
  // Take the input from the checkbox and assign the true/false value to formData.is_admin
  const handleChange = (e) => {
    setChecked(e.target.checked)
    formData.is_admin = checked.toString()
    //formData.is_admin = checked 
    console.log(formData.is_admin)
  }
  

  return (
    <div>
        <Typography variant="h4">Add a new system login</Typography>
            <form onSubmit={handleSubmit}>
              <div>
                <InputLabel>Username:</InputLabel>
                <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Email:</InputLabel>
                <TextField type="text" name="email" id="email" value={formData.email} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Password:</InputLabel>
                <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Password Confirmation:</InputLabel>
                <TextField type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}/>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Admin Access" onChange={handleChange} />
                </FormGroup>
                {/* <InputLabel>Admin:</InputLabel>
                <Checkbox name="is_admin" id="is_admin" value={"true"} label="Admin" color="warning" onChange={handleChange} /> */}
              </div>
              {/* <input type="submit" value="Login" /> */}
              <Button type="submit" variant="contained">Add Login</Button>
            </form>
        <li>
             <Link to="/home">Back to Main Page</Link>
        </li>
    </div>
  )
}

export default NewRoleForm