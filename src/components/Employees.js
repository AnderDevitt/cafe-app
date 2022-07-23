import Employee from "./Employee"
import { useGlobalState } from "../utils/stateContext"
import { ActiveStaff } from "./style/styling" 

const Employees = () => {
    const {store} = useGlobalState()
    const {employeeList} = store
    
    return (
        <ActiveStaff>
            {employeeList.map(employee =>
                <Employee key={employee.id} employee={employee} />    
            )}
        </ActiveStaff>
    )
}

export default Employees