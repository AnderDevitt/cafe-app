

const Employee = ({employee}) => {
    return (
        <>
            <div>
                <h4>{employee.first_name} {employee.last_name}</h4>
            </div>    
        </>
    )
}

export default Employee