import React from 'react'
import { useState } from 'react'

import { useGlobalState } from '../utils/stateContext'
import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { createShift } from '../services/shiftServices';
import { verifyEmployee } from '../services/employeeServices'

function Employee({employee}) {
  const {store, dispatch} = useGlobalState()
    const {clockedOnWorker, currentShift} = store
  // we will dispatch to the reducer to send formData.user to the reducer
  //const {dispatch} = useGlobalState()
  
  const initialFormData = {
    password: ""
  }
  const today = new Date()

  const [formData, setFormData] = useState(initialFormData)

  // const current = new Date()
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    
    // const current = new Date()
    // const today = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    

    // console.log(formData) // code gets the user and password when button is clicked
    verifyEmployee(formData)
    .then(worker => {
      dispatch({
        type: "setWorker",
        data: worker.username
      })
    })
    .catch(e => {console.log(e)})

    
      
    
      // clears the data from the form fields
      setFormData(initialFormData)
    
    
  }

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
  }

    const handelStartTime = () =>{
      
      let data = {
        date: today.toLocaleDateString(),
        start: today.toLocaleTimeString(),
        finish: today.toLocaleTimeString(),
        employee_id: employee.id
      }
      
      console.log(formData.start)
      console.log(formData.finish)
      console.log(clockedOnWorker)
      console.log(employee.id)
      createShift(data)
      .then(shift => {
        sessionStorage.setItem("id", shift.id)
        dispatch({
          type: "setCurrentShift",
          data: shift.id
        })
        console.log(currentShift)
        
      })
    }

    const handelFinishTime = () =>{
      
      //let data = {
      //  finish: today.toLocaleTimeString()
      //}
      //updateShift(data)
      console.log(formData.start)
      console.log(formData.finish)
    }
  
  // const handleClick = async (e) => {
  //   // setTime()
  //   let time = `${current.toLocaleTimeString()}`
  // }

  return (
    <div>
        <Typography variant="h5">{employee.first_name} {employee.last_name}</Typography>
            <form onSubmit={handleSubmit}>
                      
              <div>
                <InputLabel>PIN:</InputLabel>
                <TextField type="password" name="password" id={employee.password} value={formData.password} onChange={handleFormData}/>
              </div>
              {/* <div>
                <Button name="start" id="start" value={formData.start} onClick={handleClick}>Start</Button>
              </div> */}
              {/* <Button type="submit" name="start" id="start" variant="contained">Start Shift</Button>
              <Button type="submit" name="finish" id="finish" variant="contained">Finish Shift</Button> */}
              <Button name="start" id={employee.start} value={formData.start} onClick={handelStartTime} onChange={handleFormData}>Start My Shift</Button>
              <Button name="finish" id={employee.finish} value={formData.finish} onClick={handelFinishTime} onChange={handleFormData}>Finish My Shift</Button>
              <Button type="submit" variant="contained">Verify</Button>
            </form>
            
           
              <h3>My start time: {formData.start}</h3>
              <h3>My finish time: {formData.finish}</h3>
              <h3>{employee.id}</h3>
              
              
              
    </div>
  )
}

export default Employee