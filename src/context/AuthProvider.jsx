import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
//import useTraining from "../hooks/useTraining";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true)
  
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
        //getMember(data.memberId);
        navigate("/dashboard");

      } catch (error) {
        setAuth({});
        console.log(error);
      }
      setLoading(false)
    };
    autenticarUsuario();
  }, []);

  const cerrarSesionAuth = () => {
    setAuth({})
}
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        setLoading,
        cerrarSesionAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
