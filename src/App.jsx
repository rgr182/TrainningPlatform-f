import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";
import { AuthProvider } from "./context/AuthProvider";
import { TrainingProvider } from "./context/TrainingProvider";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import Metrics from "./pages/Metrics";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='BackGround'>
          <TrainingProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
              </Route>
              <Route path="/Dashboard" element={<RutaProtegida />}>
                <Route index element={<Dashboard />} />
                <Route path="Metrics" element={<Metrics />} />
                <Route path="CreateUser" element={<CreateUser />} />
                <Route path="EditUser" element={<EditUser />} />
              </Route>
            </Routes>
          </TrainingProvider>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
