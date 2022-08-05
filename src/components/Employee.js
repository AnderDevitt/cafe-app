import React, { useState } from 'react'
import { Typography, Card, CardContent, Button } from "@mui/material"
import ClockInDialog from './ClockInDialog'
import { useGlobalState } from "../utils/stateContext"
import Popup2 from './popups/Popup2';
import EditEmployeeForm from './EditEmployeeForm'

// The Employee component returns a card for each "active" employee in employeeList
// It is called from the Cafe View /cafe component
// It renders the name of the employee and a button which will open a popup ClockInDialog, containing a form EmployeeLoginForm that asks for verification details and 
// allows them to start their shift
// Currently verification doesn't work correctly and anyone can start or end another user's shift
function Employee({employee}) {
  const {store} = useGlobalState()
  const {loggedInUser} = store

  const [buttonPopup, setButtonPopup] = useState(false)
    // console.log(shift)
    //  disabled for testing
    // const handelFinishTime = () =>{
    //     const today = new Date()
    //     let data = {
    //      id: shift.id,   
    //      finish: today.toLocaleTimeString(),
    //      clocked_out: true
    //     }
    //     updateShift(data)
    //   }
   
    return (
      <>
        { !(employee.is_active === "false") &&
          <Card>
            <CardContent>
              <Typography variant="h5">{employee.first_name} {employee.last_name} </Typography>    
              { !(loggedInUser === "admin") &&<ClockInDialog employee={employee} /> }
              { (loggedInUser === "admin") &&<Button onClick={() => setButtonPopup(true)}>Edit Details</Button> }
            </CardContent>
          </Card> 
        }
        <br></br> 
        <br></br>
        <Popup2 trigger={buttonPopup} setTrigger = {setButtonPopup}>
        {/* <Typography variant="h6">Edit Details for {employee.first_name} {employee.last_name}</Typography>  */}
        <Card>
          <CardContent>
            <Typography variant="h6">Name: {employee.first_name} {employee.last_name} </Typography> 
            <Typography variant="h6">Username: {employee.username} </Typography>
            <Typography variant="h6">Is available to work: {employee.is_active} </Typography>         
          </CardContent>
        </Card> 

        <EditEmployeeForm />
        {/* <Button name="finish" id="finish" value="finish" onClick={handelFinishTime} >Finish My Shift</Button> */}
      </Popup2>  
      
      </>
    )
}

export default Employee