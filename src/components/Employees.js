import Employee from "./Employee"
import { useGlobalState } from "../utils/stateContext"

const Employees = () => {
    const {store} = useGlobalState()
    const {employeeList} = store
    
    return (
        <>
            {employeeList.map(employee =>
                <Employee key={employee.id} employee={employee} />    
            )}
        </>
    )
}

export default Employees