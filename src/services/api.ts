import axios from 'axios'

//exporto ela e vou usar em Transactions

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', //aqui coloco a pagina de todas as requisicoes

})