// information from the backend (url)

import axios from "axios"

const cafeAPI = axios.create({
    baseURL: 'http://localhost:4000'
})

export default cafeAPI
