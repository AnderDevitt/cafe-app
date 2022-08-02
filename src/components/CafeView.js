import Employee from "./Employee"
import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
import { ActiveStaff, CurrentShift } from "./style/styling" 
import React, { useEffect, useState } from 'react';
import { Typography } from "@mui/material"
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'


const CafeView = () => {
    const {store} = useGlobalState()
    const {employeeList, shiftList} = store
    const [value, setValue] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    return (
        <>
            <div>
                <p>Current time:</p>
                <Clock value={value} />
            </div>
            <Typography variant="h4">Cafe Staff</Typography>
            <ActiveStaff>
                {employeeList.map(employee =>
                    <Employee key={employee.id} employee={employee} />    
                )}
            </ActiveStaff>
            <Typography variant="h4">Current Shifts</Typography>
            <CurrentShift>
            {shiftList.map(shift =>
                <Shift key={shift.id} shift={shift} />
            )}
            </CurrentShift>
        </>
    )
}

export default CafeView