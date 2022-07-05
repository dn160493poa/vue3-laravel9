import axios from "axios";
import {getItem, deleteItem} from "../helpers/persistanceStorage";

const api = axios.create()

api.interceptors.request.use(config => {
    const token = getItem('access_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})

api.interceptors.response.use(response => {
    //console.log('Response:', JSON.stringify(response, null, 2))
    //const error = err.response;
    // if error is 401
    if (response.status===401 && response.config && !response.config.__isRetryRequest) {
        deleteItem('access_token')
    }
    return response
})

export default api
