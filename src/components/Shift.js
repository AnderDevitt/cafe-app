import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Button } from "@mui/material"
import { updateShift } from '../services/shiftServices';


function Shift({shift}) {
  
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
            <div>
                
                <Typography variant="h5">{shift.id}</Typography>
                <Typography variant="h5">{shift.date}</Typography>
                <Typography variant="h5">{shift.first_name} {shift.last_name}</Typography>
                <div>
                        <Button label="Log On" value="/employee_login" component={Link} to="/employee_login">Login</Button>
                </div>
                <Typography variant="h5">Start Time: {shift.start}</Typography>
                <Button name="finish" id={shift.finish} value={shift.finish} onClick={handelFinishTime} >Finish My Shift</Button>
                    
            </div>
        }
        
        </>
    )
}

export default Shift