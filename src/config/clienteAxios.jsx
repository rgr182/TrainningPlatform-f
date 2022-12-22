import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL3}`
})
console.log(import.meta.env.VITE_BACKEND_URL3);

export default clienteAxios;