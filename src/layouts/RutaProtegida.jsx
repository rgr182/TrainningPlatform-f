import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "Cargando...";
  return (
    <>
      {auth._id ? (
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
