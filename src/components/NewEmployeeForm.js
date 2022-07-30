import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Checkbox, Typography } from "@mui/material"
import { createEmployee } from "../services/employeeServices"


const NewEmployeeForm = () => {
  // we will dispatch to the reducer to send formData.user to the reducer
  //const {dispatch} = useGlobalState()
  const navigate = useNavigate()

  const initialFormData = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    is_active: "true"
  }
  

  const [formData, setFormData] = useState(initialFormData)
  const [checked, setChecked] = React.useState("true");


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

  // Take the input from the checkbox and assign the true/false value to formData.is_admin
  const handleChange = (e) => {
    setChecked(e.target.checked)
    formData.is_active = checked.toString()
    console.log(formData.is_active)
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
                <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Pin Confirmation:</InputLabel>
                <TextField type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}/>
              </div>
              <div>
                <InputLabel>Deactive:</InputLabel>
                <Checkbox name="is_active" id="is_active" value={"false"} label="Deactive" color="warning" onChange={handleChange} />
              </div>
              
              <Button type="submit" variant="contained">Add Employee</Button>
            </form>
        <li>
             <Link to="/home">Back to Main Page</Link>
        </li>
    </div>
  )
}

export default NewEmployeeForm