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
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='BackGround'>
        <TrainingProvider>
          <Routes>
              <Route path="/" element={<AuthLayout />}>
                  <Route index element={<CreateUser />} />
              </Route>
              <Route path="/CreateUser" element={<RutaProtegida />}>
                  <Route index element={<CreateUser />} />
              </Route>
              <Route path="/EditUser" element={<AuthLayout />}>
                  <Route index element={<EditUser />} />
              </Route>
          </Routes>
        </TrainingProvider>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
