import Employee from "./Employee"
//import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
import { ActiveStaff } from "./style/styling" 
import React from 'react';
// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css'


const Employees = () => {
    const {store} = useGlobalState()
    const {employeeList} = store
    // const [value, setValue] = useState(new Date());
    
    // useEffect(() => {
    //     const interval = setInterval(() => setValue(new Date()), 1000);
    
    //     return () => {
    //       clearInterval(interval);
    //     };
    //   }, []);
    

    return (
        <>
            {/* <br></br>
            <br></br>
            <div>
                <Clock value={value} />
            </div> */}
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


    // const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    // // let time = (`${current.getHours()}:${current.getMinutes()}`)
    // let time = `${current.toLocaleTimeString()}`