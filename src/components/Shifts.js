
import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
import React from 'react';
import { CurrentShift} from "./style/styling" 
// import { getShifts } from '../services/shiftServices';
// import { getCurrentShifts } from '../services/shiftServices';


const Shifts = () => {
  // const {store, dispatch} = useGlobalState()  
  const {store} = useGlobalState()
    const {shiftList} = store
    // const {currentShiftList} = store    
    console.log("Shift List in Shifts.js: " + shiftList)

      // useEffect (
      //   () => {
      // getShifts()
      // .then(shifts => {
      //   dispatch({
      //     type: "setEmployeeList",
      //     data: shifts
      //   })
      // })
      // .catch(e => {console.log(e)})
      //       .then(shifts => {
      //         dispatch({
      //           type: "setShiftList",
      //           data: shifts
      //         })
      //       })
      //   },
      //   [{shiftList}]
      // )
      // getShifts()
        // .then(shifts => {
        //   dispatch({
        //     type: "setShiftList",
        //     data: shifts
        //   })
        // })
      // useEffect (
      //   () => {
      //     getCurrentShifts()
      //       .then(shifts => {
      //         dispatch({
      //           type: "setcurrentShiftList",
      //           data: shifts
      //         })
      //       })
      //       console.log(currentShiftList)    
      //   },
      //   []
      // )

    return (
        <>   
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