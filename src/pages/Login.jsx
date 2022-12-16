import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
import "../Styles/StylesLogin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json;",
    };

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const  data  = await clienteAxios.post(
        "/Login",
        {
          user,
          password,
        }
      );
      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/metrics");
    } catch (error) {
      setAlerta({
        msg: error.response.data,
        error: true,
      });
    }
  };
  const { msg } = alerta;
  return (
    <>
      <div className="container">
        <form className="login" onSubmit={handleSubmit}>
          <h1 className="login__title text-center">Bienvenido</h1>
          {msg && <Alerta alerta={alerta} />}
          <div className="login__field">
            <label className="login__label text-center" htmlFor="email">
              Ingresa tu Usuario:
            </label>
            <input
              id="email"
              type="text"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__field">
            <label className="login__label text-center" htmlFor="password">
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <nav className="lg:flex lg:justify-between">
            <Link className="login__link" to="/olvide-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </nav>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="login__submit"
          />
        </form>
      </div>
      <div>
        <Header />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Login;
