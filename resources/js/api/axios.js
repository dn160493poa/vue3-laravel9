import axios from "axios";
import {getItem} from "../helpers/persistanceStorage";

const api = axios.create()

api.interceptors.request.use(config => {
    const token = getItem('access_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})

export default api