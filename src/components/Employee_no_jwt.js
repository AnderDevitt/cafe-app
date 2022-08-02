import React from 'react'
import { useState } from 'react'

import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { createShift } from '../services/shiftServices';
//import { verifyEmployee } from '../services/employeeServices'

function Employee({employee}) {
  const {store} = useGlobalState()
    const {clockedOnWorker} = store
  
    const initialFormData = {
      username: employee.username,
      password: ""
    }
    const today = new Date()
  const [formData, setFormData] = useState(initialFormData)

  const handleStartSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    
    formData.date = today.toLocaleDateString()
    formData.start = today.toLocaleTimeString()
    formData.finish = today.toLocaleTimeString()
    formData.employee_id = employee.id
    formData.username = employee.username
    console.log(formData.start)
    console.log(formData.finish)
    console.log(clockedOnWorker)
    console.log(employee.id)
    createShift(formData)
    .then(
      console.log("Sending data to backend")
    )
    .catch(e => {console.log(e)})
  }

  const handleFinishSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    
      
    formData.finish = today.toLocaleTimeString()
    console.log(formData.start)
    console.log(formData.finish)
    createShift(formData)
    .then(
      console.log("Sending data to backend")
    )
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
        <Typography variant="h5">{employee.first_name} {employee.last_name}</Typography>
            <form onSubmit={handleStartSubmit}>   
              <div>
                <InputLabel>PIN:</InputLabel>
                <TextField type="password" name="passwordStart" id={employee.password} value={formData.password} onChange={handleFormData}/>
                <Button type="submit" variant="contained">Start Shift</Button>
              </div>
            </form>
            <form onSubmit={handleFinishSubmit}>    
              <div>
                <InputLabel>PIN:</InputLabel>
                <TextField type="password" name="passwordFinish" id={employee.password} value={formData.password} onChange={handleFormData}/>
                <Button type="submit" variant="contained">End Shift</Button>
              </div>
            </form>
            
            <h3>My start time: {formData.start}</h3>
            <h3>My finish time: {formData.finish}</h3>
            <h3>{employee.id}</h3>  
    </div>
  )
}

export default Employee