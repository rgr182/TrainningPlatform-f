import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL3}`,
    headers: {
        "Content-Type": "application/json"
    }
})

export default clienteAxios;