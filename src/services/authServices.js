import cafeAPI from "../config/api"

export async function signUp(data) {
    const response = await cafeAPI.post('/auth/signup', data)
    //console.log(response.data)
    return response.data
}

export async function signIn(data) {
    const response = await cafeAPI.post('/auth/signin', data)
    console.log("signIn response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}

export async function employeeSignIn(data) {
    const response = await cafeAPI.post('/auth/staff_login', data)
    console.log("employeeSignIn response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}