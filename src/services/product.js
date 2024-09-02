import httpClient from "../auth/httpClient"

export const productService = {
    getAllProduct(){
        return httpClient.get('/product')
    },
    getDetailProduct(id){
        return httpClient.get(`/product/${id}`)
    }
}