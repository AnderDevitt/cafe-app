// information from the backend (url)

import axios from "axios"

const cafeAPI = axios.create({
    baseURL: 'http://localhost:4000'
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
