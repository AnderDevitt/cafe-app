import Employee from "./Employee"
import { useGlobalState } from "../utils/stateContext"
import { ActiveStaff } from "./style/styling" 
import React from 'react';



const Employees = () => {
    const {store} = useGlobalState()
    const {employeeList} = store
    
    return (
        <>
            <br></br>
            <br></br>
            <ActiveStaff>
                {employeeList.map(employee =>
                    <Employee key={employee.id} employee={employee} />    
                )}
            </ActiveStaff>
        </>
    )
}

export default Employees