import dotenv from 'dotenv'
dotenv.config()
const uri = process.env.REACT_APP_URI_APP || 'http://localhost:5000'
const axios = require('axios')
export const login = async (data) => {
    const res = await axios.post(`${uri}/auth/login`, data)
    return res.data
}
export const register = async (data) => {
    const res = await axios.post(`${uri}/auth/register`, data)
    return res.data
}
// export const updateProfile = async (name) => {
//     const res = await axios.put(`${uri}/user`, { name: name })
//     return res.data
// }
export const getProfile = async (username) => {
    // const data = { name: username }
    const res = await axios.get(`${uri}/auth?name=${username}`)

    return res.data
}
export const setupProfile = async (data) => {
    const res = await axios.post(`${uri}/auth`, data)
    return res.data
}
