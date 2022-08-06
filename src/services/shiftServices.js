import cafeAPI from "../config/api"

export async function getShifts() {
    const response = await cafeAPI.get('/shifts')
    return response.data
}

export async function getEmployeeShifts(username) {
    const response = await cafeAPI.get('/shifts/employee')
    return response.data
}

export async function getShiftsByEmployee(username) {
    const response = await cafeAPI.get(`/shifts?username=${username}`)
    return response.data
}



export async function createShift(data) {
    const response = await cafeAPI.post('/shifts_new', data)
    return response.data
}

export async function updateShift(data) {
    const response = await cafeAPI.post('/shifts_update', data)
    return response.data
}
