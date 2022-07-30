import cafeAPI from "../config/api"

export async function getShifts() {
    const response = await cafeAPI.get('/shifts')
    console.log(response.data)
    return response.data
}

export async function createShift(data) {
    const response = await cafeAPI.post('/shifts', data)
    console.log(response.data)
    return response.data
}
