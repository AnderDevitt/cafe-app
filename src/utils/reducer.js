// reducer will handle employee data 
// receives current state and the action we want to perform on the state
// the action.type will identify the switch case to use
// the data key has the information used to update the state
// the reducer must return data

export const reducer = (state, action) => {
    console.log(state)
    console.log(action)

    switch(action.type) {
        case "setEmployeeList": {
            // input the initial values into employeeList
            return {
                ...state,
                employeeList: action.data
            }
        }
        case "setCurrentUser": {
            // takes the logged in user from the login form and sets this value to the currentUser state globally
            return {
                ...state,
                currentUser: action.data
            } 
        }
        // default in case none of the cases activate
        default: return state
    }
}