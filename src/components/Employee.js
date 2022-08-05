import React from 'react'
// import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { Typography, Card, CardContent } from "@mui/material"


import ClockInDialog from './ClockInDialog'
import ClockOutDialog from './ClockOutDialog'

// import { getShifts } from '../services/shiftServices';


function Employee({employee, shift}) {
  
  const {store} = useGlobalState()
    const {clockedOnWorker} = store
  

  return (
    <>
      { !(employee.is_active === "false") &&
        <Card>
          <CardContent>
          <Typography variant="h5">{employee.first_name} {employee.last_name} </Typography>
          {/* { working && <Typography variant="h6">You are {onShift}. </Typography> } */}
          
          {/* <Typography variant="h6">You are clocked on. </Typography>     */}
          
            <ClockInDialog employee={employee} />
            { clockedOnWorker && <ClockOutDialog employee={shift} /> }
          </CardContent>
        </Card> 
      }
    </>
  )
}

export default Employee