import axios from "axios";

const register = credentials => {
    return axios.post('/api/auth/register', {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation
    })
}

const login = credentials => {
    return axios.post('/api/auth/login', {
        email: credentials.email,
        password: credentials.password
    })
}

export default {
    register,
    login
}