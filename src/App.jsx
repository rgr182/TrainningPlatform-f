import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Proyectos from './pages/Proyectos'
import { AuthProvider } from './context/AuthProvider'
import { TrainingProvider } from './context/TrainingProvider'
import CreateUser from './pages/CreateUser'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TrainingProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
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
