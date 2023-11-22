import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import axios, { AxiosError } from "axios";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setApiClient(ctx = undefined) {
    let cookies = parseCookie(ctx);
    const api = axios.create({
        baseURL: "http://localhost:3333",
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })
    api.interceptors.response.use(response => {
        return response
    },
        (error: AxiosError) => {
            if (error.response.status == 401) {
                if (typeof window !== undefined) {

                } else {
                    return Promise.reject(new AuthTokenError())
                }
            }
            return Promise.reject(error)
        }
    )
}