import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const RutaProtegida = () => {
  const { auth, loading,setLoading } = useAuth();
  if(!auth.userToken) setLoading(false)
  if (loading) return "Cargando..."
  return (
    <>
      {auth.userToken ? (
        <main className="">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
