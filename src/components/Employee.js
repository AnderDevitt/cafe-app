import React from 'react'
import { useState } from 'react'

import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { createShift } from '../services/shiftServices';

function Employee({employee}) {
  // we will dispatch to the reducer to send formData.user to the reducer
  const {dispatch} = useGlobalState()
  
  const initialFormData = {
    date: "",
    start: "",
    finish: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  // const current = new Date()
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    const current = new Date()
    const today = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    setFormData({
      ...formData,
      date: today,
    })
    console.log(formData) // code gets the user and password when button is clicked
    
    createShift(formData)
    .then(worker => {
      sessionStorage.setItem("username", worker.username)
      // console.log(user)
      // dispatch calls setCurrentUser in the reducer with formData.user as the data
      dispatch({
        type: "setWorker",
        data: worker.username
      })
      // clears the data from the form fields
      setFormData(initialFormData)
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
        <Typography variant="h5">{employee.first_name} {employee.last_name}</Typography>
            <form onSubmit={handleSubmit}>
              {/* <Typography>{date}</Typography>         */}
              <div>
                <InputLabel>PIN:</InputLabel>
                <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
              </div>
              <Button type="submit" name="start" id="start" variant="contained">Start Shift</Button>
              <Button type="submit" name="finish" id="finish" variant="contained">Finish Shift</Button>
            </form>
    </div>
  )
}

export default Employee