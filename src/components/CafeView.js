import Employee from "./Employee"
// import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
// import { ActiveStaff, CurrentShift } from "./style/styling" 
import React, { useEffect } from 'react';
import { Typography } from "@mui/material"
// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css'
import { ActiveStaff, EmployeeContainer } from "./style/styling" 
import { getEmployees } from '../services/employeeServices';
import { useLocation } from 'react-router-dom'


const CafeView = () => {
    const {store, dispatch} = useGlobalState()
    const {employeeList} = store
    // const [value, setValue] = useState(new Date());

    const location = useLocation()
    console.log(location)
    useEffect (
        () => {
          if (location.pathname === "/cafe") {
            // connect to the backend api and get the employees, then dispatch to the reducer to initialise the employeeList
          getEmployees()
          .then(employees => {
            dispatch({
              type: "setEmployeeList",
              data: employees
            })
          })
          .catch(e => {console.log(e)})
          }  
        },
        [location] // triggers the useEffect to refresh list of employees when location changes
      )

    // useEffect(() => {
    //     const interval = setInterval(() => setValue(new Date()), 1000);
    //     return () => {
    //       clearInterval(interval);
    //     };
    //   }, []);
    

    return (
        <>
            {/* <div>
                <p>Current time:</p>
                <Clock value={value} />
            </div> */}
            <EmployeeContainer>
                <Typography variant="h4">Available Cafe Staff</Typography>
                <ActiveStaff>
                    {employeeList.map(employee =>
                    <>
                        <Employee key={employee.id} employee={employee} />  
                        
                    </>
                          
                    )}
                </ActiveStaff>
            </EmployeeContainer>
            {/* <div>
                <Typography variant="h4">Current Shifts</Typography>
                <CurrentShift>
                    {shiftList.map(shift =>
                        <Shift key={shift.id} shift={shift} />
                    )}
                </CurrentShift>
            </div> */}
            
        </>
    )
}

export default CafeView