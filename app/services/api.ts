import axios from 'axios'

// Criação de uma instância do axios com a baseURL da API
const api = axios.create({
    baseURL: 'https://dummyjson.com',
})

export default api
