
import Shift from "./Shift" 
import { useGlobalState } from "../utils/stateContext"
import React, { useEffect, useState } from 'react';
import { CurrentShift} from "./style/styling" 
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'


const Shifts = () => {
    const {store} = useGlobalState()
    const {shiftList} = store
    const [value, setValue] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    // const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    // // let time = (`${current.getHours()}:${current.getMinutes()}`)
    // let time = `${current.toLocaleTimeString()}`
    return (
        <>   
            <div>
                <p>Current time:</p>
                <Clock value={value} />
            </div>
            <br></br>
            <p>Click the verify button and enter your details. Then click Finish My Shift to clock out. </p>
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