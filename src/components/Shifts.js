
import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
import React, { useEffect } from 'react';
import { CurrentShift} from "./style/styling" 
import { getShifts } from '../services/shiftServices';
import { Typography } from "@mui/material"
import { useLocation } from 'react-router-dom'

const Shifts = () => {
  const {store, dispatch} = useGlobalState()
  const {shiftList} = store
  
  const location = useLocation()

    console.log(location)
    // console.log("Shift List in Shifts.js: " + shiftList)

      useEffect (
        () => {
          // If the location is /shifts then a re-render of the shifts list will be triggered
          if (location.pathname === "/shifts") {
            // connect to the backend api and get the shifts, then dispatch to the reducer to initialise the shiftList
          getShifts()
          .then(shift => {
            dispatch({
              type: "setShiftList",
              data: shift
            })
          })
          .catch(e => {console.log(e)})
          }  
        },
        [location] // triggers the useEffect to refresh list of shifts when location changes
      )
      
    return (
        <>  
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