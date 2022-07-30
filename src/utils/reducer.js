// reducer will handle employee data 
// receives current state and the action we want to perform on the state
// the action.type will identify the switch case to use
// the data key has the information used to update the state
// the reducer must return data

export const reducer = (state, action) => {
    // console.log(state)
    // console.log(action)

    switch(action.type) {
        case "setEmployeeList": {
            // input the initial values into employeeList
            return {
                ...state,
                employeeList: action.data
            }
        }
        case "setLoggedInUser": {
            // takes the logged in user from the login form and sets this value to the currentUser state globally
            return {
                ...state,
                loggedInUser: action.data
            } 
        }

        case "setWorker": {
            // takes the logged in user from the login form and sets this value to the currentUser state globally
            return {
                ...state,
                ClockedOnWorker: action.data
            } 
        }

        // default in case none of the cases activate
        case "setShiftList": {
            // input the initial values into shiftList
            console.log("setshift arrived")
            console.log(action.data)
            return {
                ...state,
                shiftList: action.data
            }
        }

        // case "createNewRole": {
        //     // takes the logged in user from the login form and sets this value to the currentUser state globally
        //     return {
        //         ...state,
        //         newRole: action.data
        //     } 
        // }
        default: return state
    }
}