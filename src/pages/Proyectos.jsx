import { useEffect } from 'react'
import useProyectos from "../hooks/useTraining"
import PreviewProyecto from "../components/PreviewProyecto"
import Alert from "../components/Alert"

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alert

  return (
    <>
        <h1 className="text-4xl font-black">Proyectos</h1>

        {msg && <Alert alert={alert} />}

        <div className="bg-white shadow mt-10 rounded-lg ">
            {proyectos.length ? 
              proyectos.map(proyecto => (
                  <PreviewProyecto 
                      key={proyecto._id}
                      proyecto={proyecto}
                  />
              ))
            : <p className=" text-center text-gray-600 uppercase  p-5">No hay proyectos aún</p>}
        </div>
    </>
  )
}

export default Proyectos