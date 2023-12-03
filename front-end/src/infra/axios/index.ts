import axios from "axios"
import { State } from "../../types";
import { Store } from "redux";

const baseURL = "http://localhost:3333";


let store: Store;

export const injectStore = (_store: Store) => store = _store;

const http = axios.create({
    baseURL
})

const httpToken = axios.create({
    baseURL,
})

httpToken.interceptors.request.use(
    (config) =>
    {
        const state: State = store.getState();
        if(state.auth.userProps?.token){
            config.headers.Authorization = `Bearer ${state.auth.userProps.token}`
        }
        config.timeout = 15000;
        return config
    }
)

export{http,httpToken}