import Employee from "./Employee"
import { useGlobalState } from "../utils/stateContext"
import { ActiveStaff } from "./style/styling" 

const Employees = () => {
    const {store} = useGlobalState()
    const {employeeList} = store
    
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    return (
        <>
            <div>
                <h4>{date}</h4>
            </div>
            <ActiveStaff>
                {employeeList.map(employee =>
                    <Employee key={employee.id} employee={employee} />    
                )}
            </ActiveStaff>
        </>
    )
}

export default Employees