import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './pages/Login'
import Admin from './pages/Admin'
import Proyectos from './pages/Proyectos'
/*
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import Proyecto from './paginas/Proyecto'
import EditarProyecto from './paginas/EditarProyecto'
import NuevoColaborador from './paginas/NuevoColaborador'*/

import {AuthProvider} from './context/AuthProvider'
import {TrainingProvider} from './context/TrainingProvider'



function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <TrainingProvider>
          <Routes>
              <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Admin />} />
              </Route>
              <Route path="/proyectos" element={<RutaProtegida />}>
                  <Route index element={<Proyectos />} />
              </Route>
          </Routes>
        </TrainingProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
