import api from "./axios";

const getUserProfile = userId => {
    return api.get(`/api/profile/${userId}`)
}

export default {
    getUserProfile
}
