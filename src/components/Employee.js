import React from 'react'
// import { Link } from "react-router-dom"
// import { useGlobalState } from '../utils/stateContext'
import { Typography, Card, CardContent } from "@mui/material"


import ClockInDialog from './ClockInDialog'
// import ClockOutDialog from './ClockOutDialog'

// import { getShifts } from '../services/shiftServices';


function Employee({employee, shift}) {
  
  // const {store} = useGlobalState()
  //   const {clockedOnWorker} = store
  

  return (
    <>
      { !(employee.is_active === "false") &&
        <Card>
          <CardContent>
          <Typography variant="h5">{employee.first_name} {employee.last_name} </Typography>          
          <ClockInDialog employee={employee} />
            {/* <ClockOutDialog employee={shift} /> */}
          </CardContent>
        </Card> 
      }
    </>
  )
}

export default Employee