import cafeAPI from "../config/api"

export async function getShifts() {
    const response = await cafeAPI.get('/shifts')
    console.log("getShifts response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}

export async function getCurrentShifts() {
    const response = await cafeAPI.get('/shifts_current')
    console.log("createCurrentShifts response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    console.log(response.data)
    return response.data
}

export async function getShiftsByEmployee(username) {
    const response = await cafeAPI.get(`/shifts?username=${username}`)
    console.log(response.data)
    return response.data
}



export async function createShift(data) {
    const response = await cafeAPI.post('/shifts_new', data)
    console.log("createShift response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}

export async function updateShift(data) {
    const response = await cafeAPI.post('/shifts_update', data)
    console.log("updateShift response is an object (key-value pair) with these keys: " + Object.keys(response.data))
    return response.data
}
