import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  
  const navigate = useNavigate();
  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if(!token) {
        return;
      }
      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
      try {
        const { data } = await clienteAxios.get("/auth", config);
        setAuth(data);
        navigate("/dashboard");
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    autenticarUsuario();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
