import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { createEmployee } from "../services/employeeServices"


const NewEmployeeForm = () => {
  
  const navigate = useNavigate()

  const initialFormData = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    is_active: ""
  }
  

  const [formData, setFormData] = useState(initialFormData)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // code gets the user and password when button is clicked
    
    createEmployee(formData)
    
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

  return (
    <div>
        <Typography variant="h4">Add a new Cafe Employee</Typography>
            <form onSubmit={handleSubmit}>
              <div>
                <InputLabel>Username:</InputLabel>
                <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>First Name:</InputLabel>
                <TextField type="text" name="first_name" id="first_name" value={formData.first_name} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Last Name:</InputLabel>
                <TextField type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Pin:</InputLabel>
                <TextField type="password" name="password" id="password" inputProps={{ maxLength: 4, inputMode: 'numeric', pattern: '[0-9]*' }} value={formData.password} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Pin Confirmation:</InputLabel>
                <TextField type="password" name="password_confirmation" id="password_confirmation" inputProps={{ maxLength: 4, inputMode: 'numeric', pattern: '[0-9]*' }} value={formData.password_confirmation} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Available (true/false):</InputLabel>
                <TextField type="text" name="is_active" id="is_active" value={formData.is_active} onChange={handleFormData}/>
              </div>
              
              <Button type="submit" variant="contained">Add Employee</Button>
            </form>
    </div>
  )
}

export default NewEmployeeForm