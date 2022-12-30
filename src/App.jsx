import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import { AuthProvider } from "./context/AuthProvider";
import { TrainingProvider } from "./context/TrainingProvider";
import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import NewPassword from "./pages/NewPassword";
import Dashboard from "./pages/Dashboard";
import Metrics from "./pages/Metrics";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TrainingProvider>
          <Routes>
              <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Login />} />
              </Route>
              <Route path="/dashboard" element={<RutaProtegida />}>
                  <Route index element={<CreateUser />} />
              </Route>
          </Routes>
        </TrainingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
