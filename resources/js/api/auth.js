import axios from "axios";

const register = credentials => {
    return axios.post('/api/users', {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation
    })
}

export default {
    register
}