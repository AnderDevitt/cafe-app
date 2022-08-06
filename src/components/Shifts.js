
import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
import React, { useEffect } from 'react';
import { CurrentShift} from "./style/styling" 
import { getShifts } from '../services/shiftServices'

import { Typography } from "@mui/material"
import { useLocation } from 'react-router-dom'

// These were used for getShiftsByEmployee but I've removed it for assessment submission
// import { getShiftsByEmployee } from '../services/shiftServices' // remo
// import { useParams } from 'react-router-dom'
// import React, { useState } from 'react';

const Shifts = () => {
  const {store, dispatch} = useGlobalState()
  const {shiftList} = store
  const location = useLocation()
  // Also for getShiftsByEmployee and will be worked on later
  // const {error, setError} = useState(null)
  // const params = useParams()

      useEffect (
        () => {
          
          // If the location is /shifts then a re-render of the shifts list will be triggered
          if (location.pathname === "/shifts") {
          // connect to the backend api and get the shifts, then dispatch to the reducer to initialise the shiftList
            getShifts()
            .then(shifts => {
              // if (shifts.error) {
              //   console.log(shifts.error)
              // } else {
                dispatch({
                  type: "setShiftList",
                  data: shifts
                })
              })
              .catch(e => {console.log(e)})  
          }
          // I had this getShiftsByEmployee working in a previous branch but unfortunately I broke it and lost all the backend and frontend work I had done
          // } else if (params.username) {
          //   getShiftsByEmployee(params.username)
          //   .then(shifts => {
          //     console.log(shifts)
          //     if (shifts.error) {
          //       setError(`${params.username} doesn't exist`)
          //       dispatch({
          //         type:"setShiftList",
          //         data: []
          //       })
          //     } else {
          //       dispatch({
          //         type:"setShiftList",
          //         data: shifts
          //       })
          //     }
          //   })
          //   .catch(e => {console.log(e)})
          // } 
        },
        [dispatch, location] // triggers the useEffect to refresh list of shifts when location changes
      )
      
    return (
        <> 
          {/* {error && <p>{error}</p>} */}
          <br></br> 
          <Typography variant="h4">Staff on Shifts </Typography>
            <br></br> 
            <CurrentShift>
            {shiftList.map(shift =>
                <Shift key={shift.id} shift={shift} />
            )}
            </CurrentShift>
        </>
    )
}
export default Shifts

// const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    // // let time = (`${current.getHours()}:${current.getMinutes()}`)
    // let time = `${current.toLocaleTimeString()}`