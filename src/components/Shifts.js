
import Shift from "./Shift" 
// import { useGlobalState } from "../utils/stateContext"
import React, {useState, useEffect } from 'react';
import { CurrentShift} from "./style/styling" 
import { getShifts } from '../services/shiftServices';
// import { getCurrentShifts } from '../services/shiftServices';
import { Typography } from "@mui/material"

const Shifts = () => {
  const initialShiftList = []
  const [shiftList, setShiftList] = useState(initialShiftList)  
     
    console.log("Shift List in Shifts.js: " + shiftList)

      useEffect (
        () => {
      getShifts()
      .then(shifts => {
        setShiftList(shifts)
      })
      .catch(e => {console.log(e)})
      },
        []
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