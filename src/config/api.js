// information from the backend (url)

import axios from "axios"
// import 'dotenv/config'

const cafeAPI = axios.create({
    // baseURL: process.env.BACKEND_URL
    baseURL: 'https://als-cafe-api.herokuapp.com'
})

cafeAPI.interceptors.request.use(req => {
    // send the token in the request
    const token = sessionStorage.getItem("token")
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    

    return req
})

export default cafeAPI
