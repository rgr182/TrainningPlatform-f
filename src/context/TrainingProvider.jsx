import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const TrainingContext = createContext();

const TrainingProvider = ({children}) => {

    const [metrics, setMetrics] = useState([]);
    const [alerta, setAlerta] = useState({});

    const navigate = useNavigate();
    const { auth } = useAuth()

    useEffect(() => {
        const obtenerMetrics = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return
                
    
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios('/GetGrades', config)
                setMetrics(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerMetrics()
    }, [auth])


    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }
    const cerrarSesionTraning = () => {
        setMetrics([])
        setAlerta({})

    }

    return (
        <TrainingContext.Provider
            value={{
                metrics,
                mostrarAlerta,
                alerta,
                cerrarSesionTraning
            }}
        >{children}
        </TrainingContext.Provider>
    )
}
export { 
    TrainingProvider
}

export default TrainingContext