import axios from "axios";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    headers:{
        Authorization: "Bearer MQ.awaC7tja9IbSffUlAY8_EOg1kbEy4SdhA8Tk9qGoz5rqRfm4mwDybkcFqh4X"
    }
});