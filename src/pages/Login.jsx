import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import Header from "../components/Header";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
import FooterCopyright from "../components/FooterCopyright";
import "../Styles/StylesBody.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "text/plain",
    };

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
        const {data} = await clienteAxios.post(
        "/Login",
        {
          User: email,
          Password: password,
        }
      )
      setAlerta({})
      localStorage.setItem("token", data.userToken);
      setAuth(data)
      navigate("/Dashboard");
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error.response.data,
        error: true,
      });
    }
  };
  const { msg } = alerta;
  return (

    <>
      <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='Container'>
        <div className='LoginSquare'>
          <form className='form-complete' onSubmit={handleSubmit}>
            <div className='container-welc'>
              <div className='eti welc-et'>Bienvenido</div>
              {msg && <Alerta alerta={alerta} />}
            </div>
            <label className='eti' htmlFor="email">Ingresa tu Usuario:</label>
            <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} />
            <label id="password" className='eti'>Contraseña:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <div className='FgtPass'>
              <a href="./ForgotPass" className=' FgtLink'>¿Olvidaste tu contraseña?</a>
            </div>
            <br />
            <div className='container-button'>
              <button className='buttonIniSesion' type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
      <Header/>
      <FooterCopyright/>
    </>
  );
};



export default Login;
