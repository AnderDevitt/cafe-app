import Employee from "./Employee"
// import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
// import { ActiveStaff, CurrentShift } from "./style/styling" 
import React, { useEffect } from 'react';
// import React, { useState } from 'react';
import { Typography } from "@mui/material"

import { ActiveStaff, EmployeeContainer } from "./style/styling" 
import { getEmployees } from '../services/employeeServices';
import { useLocation } from 'react-router-dom'

const CafeView = () => {
    const {store, dispatch} = useGlobalState()
    const {employeeList} = store
    

    const location = useLocation()
    
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
        [dispatch, location] // triggers the useEffect to refresh list of employees when location changes
      )

    return (
        <>
            
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
        </>
    )
}

export default CafeView

