import httpClient from "../auth/httpClient"
export const authservice ={
    login(body){
        return httpClient.post ('/login', body)
    },
    register(body){
        return httpClient.post ('/register', body)
    }
}