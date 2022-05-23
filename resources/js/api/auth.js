import api from "./axios";

const register = credentials => {
    return api.post('/api/auth/register', {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation
    })
}

const login = credentials => {
    return api.post('/api/auth/login', {
        email: credentials.email,
        password: credentials.password
    })
}

const getCurrentUser = () => {
    return api.post('/api/auth/me')
}

export default {
    register,
    login,
    getCurrentUser
}