import cafeAPI from "../config/api"

export async function signUp(data) {
    const response = await cafeAPI.post('/auth/signup', data)
    //console.log(response.data)
    return response.data
}

export async function signIn(data) {
    const response = await cafeAPI.post('/auth/signin', data)
    //console.log(response.data)
    return response.data
}

export async function employeeSignIn(data) {
    const response = await cafeAPI.post('/auth/staff_login', data)
    //console.log(response.data)
    return response.data
}