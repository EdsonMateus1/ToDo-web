import axios from "axios";


const api = axios.create({
    baseURL: "http://192.168.1.2:3333/task",
    responseType : "json",
})
export default api;