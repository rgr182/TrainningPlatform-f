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
import CreateTechStack from "./pages/CreateTechStack";
import ViewMembers from "./pages/ViewMembers";
import { CreateBootcamp } from "./pages/CreateBootcamp";
import { EditBootcamp } from "./pages/EditBootcamp";
import ForgotPass from "./pages/ForgotPass";
import { ViewTechnologies } from "./pages/ViewTechnologies";
import { ViewCandidates } from "./pages/ViewCandidates";
import { ViewBootcamps } from "./pages/ViewBootcamps";
import { CreateCandidate } from "./pages/CreateCandidate";
import { EditTech} from "./pages/EditTech"
import { EditCandidate } from "./pages/EditCandidate";
import { ViewTechAssigned } from "./pages/ViewTechAssigned";
import { GradesSubmit } from "./pages/GradesSubmit";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='BackGround'>
          <TrainingProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="ForgotPass" element={<ForgotPass />} />
              </Route>
              <Route path="/dashboard" element={<RutaProtegida />}>
                <Route index element={<Dashboard />} />
                <Route path="Users" element={<ViewMembers />} />
                <Route path="Metrics" element={<Metrics />} />
                <Route path="CreateUser" element={<CreateUser />} />
                <Route path="EditUser" element={<EditUser />} />
                <Route path="CreateTechStack" element={<CreateTechStack />} />
                <Route path="CreateBootcamp" element={<CreateBootcamp />} />
                <Route path="EditBootcamp" element={<EditBootcamp />} />
                <Route path="EditTechnology" element={<EditTech/>}/>
                <Route path="ViewTechnologies" element={<ViewTechnologies />} />
                <Route path="ViewCandidates" element={<ViewCandidates />} />
                <Route path="ViewBootcamps" element={<ViewBootcamps/>}/>
                <Route path="CreateCandidate" element={<CreateCandidate/>}/>
                <Route path="EditCandidate" element={<EditCandidate/>}/>
                <Route path="ViewTechAssigned" element={<ViewTechAssigned/>}/>
                <Route path="GradesSubmit" element={<GradesSubmit/>}/>
              </Route>
            </Routes>
          </TrainingProvider>
        </div>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
