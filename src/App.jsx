import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";

import Login from "./pages/Login";
import ForgotPass from "./pages/ForgotPass";
import NewPassword from "./pages/NewPassword";
import Dashboard from "./pages/Dashboard";
import Metrics from "./pages/Metrics";

import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/forgot-password" index element={<ForgotPass />} />
            <Route
              path="forgot-password/:token"
              index
              element={<NewPassword />}
            />
          </Route>
          <Route path="/dashboard" element={<Metrics />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
