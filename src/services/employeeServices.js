import cafeAPI from "../config/api"

export async function getEmployees() {
    const response = await cafeAPI.get('/employees')
    // console.log(response.data)
    return response.data
}

export async function createEmployee(data) {
    const response = await cafeAPI.post('/staff_new', data)
    console.log(response.data)
    return response.data
}

export async function verifyEmployee(data) {
    const response = await cafeAPI.post('/staff_login', data)
    console.log(response.data)
    return response.data
}