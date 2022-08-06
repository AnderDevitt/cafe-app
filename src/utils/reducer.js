// reducer will handle employee data 
// receives current state and the action we want to perform on the state
// the action.type will identify the switch case to use
// the data key has the information used to update the state
// the reducer must return data

export const reducer = (state, action) => {
  
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
        case "setToken": {
            // takes the logged in user from the login form and sets this value to the currentUser state globally
            return {
                ...state,
                token: action.data
            } 
        }
        case "setCurrentShift": {
            // takes the logged in user from the login form and sets this value to the currentUser state globally
            return {
                ...state,
                currentShift: action.data
            } 
        }

        case "setWorker": {
            // takes the logged in user from the login form and sets this value to the currentUser state globally
            return {
                ...state,
                clockedOnWorker: action.data
            } 
        }

        case "setTime": {
            return {
                ...state,
                time: action.data
            }
        }

        case "setValue": {
            return {
                ...state,
                value: action.data
            }
                
        }
        case "setShiftList": {
            // input the initial values into shiftList
            return {
                ...state,
                shiftList: action.data
            }
        }
        
        case "setCurrentShiftList": {
            // input the initial values into shiftList
            return {
                ...state,
                currentShiftList: action.data
            }
        }
        // default in case none of the cases activate
        default: return state
    }
}

// initial values for states
export const initialState = {
    employeeList: [],
    shiftList: [],
    loggedInUser: sessionStorage.getItem("username") || "",
    clockedOnWorker: sessionStorage.getItem("username") || "",
    token: sessionStorage.getItem("token") || null
  }