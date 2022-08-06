import cafeAPI from "../config/api"

export async function getEmployees() {
    const response = await cafeAPI.get('/employees')
    console.log("getEmployees response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    // console.log(response.data)
    return response.data
}

export async function createEmployee(data) {
    const response = await cafeAPI.post('/staff_new', data)
    console.log("createEmployee response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}

export async function editEmployee(data) {
    const response = await cafeAPI.post('/employees/:id', data)
    console.log("createEmployee response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}

export async function verifyEmployee(data) {
    const response = await cafeAPI.post('/staff_login', data)
    console.log("verifyEmployee response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    // console.log(response.data)
    return response.data
}