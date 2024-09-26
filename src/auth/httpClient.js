import axios from "axios";

const httpClient = axios.create({
    // baseURL : 'https://demo-web.click/api',
    baseURL : 'https://66d57918f5859a704266301f.mockapi.io',
    contentType : 'application/json'
})


export default httpClient