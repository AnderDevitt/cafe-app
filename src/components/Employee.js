import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { Button, Typography, Card, CardContent } from "@mui/material"
import { createShift } from '../services/shiftServices';
import Popup1 from './popups/Popup1';
import EmployeeLogin from './EmployeeLogin'
// import { getShifts } from '../services/shiftServices';


function Employee({employee, shift}) {
  const {store, dispatch} = useGlobalState()
  const { currentShift} = store
  // we will dispatch to the reducer to send formData.user to the reducer
  //const {dispatch} = useGlobalState()
  
  const [buttonPopup, setButtonPopup] = useState(false)
  
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
            {/* <div>
              <Button label="Log On" value="/employee_login" component={Link} to="/employee_login">Verify</Button>
            </div> */}
            {/* <Button name="start" id={employee.start} value={employee.start} onClick={handelStartTime} >Start My Shift</Button> */}
            <Button onClick={() => setButtonPopup(true)}>Clock In</Button>
          </CardContent>
        </Card>
      }
      <br></br>
      <br></br>
      <Popup1 trigger={buttonPopup} setTrigger = {setButtonPopup}>
        <p>Enter your credentials, click Start, then Close</p> 
        <EmployeeLogin />
        <Button name="start" id={employee.start} value={employee.start} onClick={handelStartTime} >Start My Shift</Button>
      </Popup1>  
    </>
  )
}

export default Employee