import axios from "./axios";

const getUserProfile = userId => {
    return axios.get(`/profiles/${userId}`)
}

export default {
    getUserProfile
}
