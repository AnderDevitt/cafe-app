import React from 'react'
import { useState } from 'react'
// import { Link } from "react-router-dom";
import { EmployeeContainer } from './style/styling'


const Employee = ({employee}) => {

  
  const initialFormData = {
    pin: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you pressed submit")
    console.log(formData) // check code gets the pin
    // clears the data from the form fields
    setFormData(initialFormData)
  }

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    return (
        <>
            {/* Check that only active employees are on the list to check in for a shift */}
            { employee.active === "true" ?
                <EmployeeContainer>
                    <h4>{employee.first_name} {employee.last_name}</h4>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>PIN:</label>
                                <input type="password" name="pin" maxLength="4" value={formData.pin} onChange={handleFormData} />
                            </div>
                            <input type="submit" value="Clock In" />
                            <input type="submit" value="Clock Out" />
                        </form>
                    </div>
                </EmployeeContainer>    
                :
                <>
                {/* Inform the user if no active staff are found */}
                <p>No employees currently active</p>
                </>
            }  
        </>
    )
}

export default Employee