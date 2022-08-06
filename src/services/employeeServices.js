import cafeAPI from "../config/api"

export async function getEmployees() {
    const response = await cafeAPI.get('/employees')
    return response.data
}

export async function createEmployee(data) {
    const response = await cafeAPI.post('/staff_new', data)
    return response.data
}

export async function editEmployee(data) {
    const response = await cafeAPI.post('/employees/:id', data)
    return response.data
}

export async function verifyEmployee(data) {
    const response = await cafeAPI.post('/staff_login', data)
    return response.data
}