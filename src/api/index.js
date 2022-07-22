import axios from "axios";
import { toast } from "react-toastify";
import {Pokemon} from "./Pokemon";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

axios.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if (error.message === "Network Error" && !error.response) {
        toast.error("Network error - Please try again later.");
    }
    
    const { status } = error.response;
    
    if (status === 500) {
        toast.error("Internal Server Error...");
    }
    
    throw error.response;
});

export const requests = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
};

export const agent = {
    pokemon: Pokemon
}
