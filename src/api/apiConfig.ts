import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers:{
        Authorization: "Bearer Nw.G04imsv_d8gfG7k7ww_AUN4Acq2vicCRz7Zek_EMWR2AkeJ84aiQHqNAn73t"
    }
});