import api from "./axios";

const getFeed = apiUrl => {
    return api.get(apiUrl)
}

export default {
    getFeed
}