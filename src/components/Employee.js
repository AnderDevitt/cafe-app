import React from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { Button, Typography, Card, CardContent } from "@mui/material"
import { createShift } from '../services/shiftServices';


function Employee({employee, shift}) {
  const {store, dispatch} = useGlobalState()
  const { currentShift} = store
  // we will dispatch to the reducer to send formData.user to the reducer
  //const {dispatch} = useGlobalState()
  
  
  const today = new Date()

    const handelStartTime = () =>{
      let data = {
        date: today.toLocaleDateString(),
        start: today.toLocaleTimeString(),
        finish: today.toLocaleTimeString(),
        employee_id: employee.id,
        clocked_out: false
      }
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


  return (
    <>
      {!(employee.clocked_out === true) &&
        <Card>
          <CardContent>
          <Typography variant="h5">{employee.first_name} {employee.last_name}</Typography>
            <div>
              <Button label="Log On" value="/employee_login" component={Link} to="/employee_login">Verify</Button>
            </div>
            <Button name="start" id={employee.start} value={employee.start} onClick={handelStartTime} >Start My Shift</Button>
            {/* <Button name="start" value="/employee_login" component={Link} to="/employee_login" onClick={handelStartTime} >Start My Shift</Button> */}
          </CardContent>
        </Card>
        
      }  
    </>
  )
}

export default Employee