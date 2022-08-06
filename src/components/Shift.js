import React, { useState } from 'react'
import { Typography, Button, Card, CardContent } from "@mui/material"
import { updateShift } from '../services/shiftServices';
import Popup2 from './popups/Popup2';
import EmployeeLogin from './EmployeeLogin'


function Shift({shift}) {
  
    const [buttonPopup, setButtonPopup] = useState(false)
    
    const handelFinishTime = () =>{
        const today = new Date()
        let data = {
         id: shift.id,   
         finish: today.toLocaleTimeString(),
         clocked_out: true
        }
        updateShift(data)
      }

      
    return (
        <>
        {!(shift.clocked_out === true) &&
            <Card>
            <CardContent>
                <Typography variant="h6">{shift.first_name} {shift.last_name}</Typography>
                <Typography variant="h7">{shift.date}</Typography>
                <Typography variant="h5">Start Time: {shift.start}</Typography>
                {/* <Button name="finish" id={shift.finish} value={shift.finish} onClick={handelFinishTime} >Finish My Shift</Button> */}
                <Button onClick={() => setButtonPopup(true)}>End Shift</Button>    
                {/* <input type="submit" value="Clock Out" /> */}
                {/* <ClockOutDialog employee={shift} /> */}
                </CardContent>
          
                </Card>
        }
        <br></br> 
        <Popup2 trigger={buttonPopup} setTrigger = {setButtonPopup}>
        <Typography variant="h6">Finish your shift</Typography> 
        <EmployeeLogin />
        <Button name="finish" id={shift.finish} value={shift.finish} onClick={handelFinishTime} >Finish My Shift</Button>
      </Popup2>  
        </>
    )
}

export default Shift