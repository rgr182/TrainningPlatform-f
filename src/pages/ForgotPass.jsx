import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alert";
import Header from "../components/Header";
import Footer from "../components/FooterCopyright";
import "../Styles/StylesLogin.css";

const ForgotPass = () => {
  const [user, setUser] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "The email is required",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
        email,
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")`,
        }}
        className="Container"
      >
        <div className="LoginSquare">
          <form className="form-complete" onSubmit={handleSubmit}>
            <div className="container-welc">
              <div className="eti welc-et">Forgot your password?</div>
              {msg && <Alert alert={alert} />}
            </div>
            <label className="eti" htmlFor="user">
              Enter your user:
            </label>
            <input
              id="user"
              type="text"
              placeholder="Type your user"
              onChange={(e) => setUser(e.target.value)}
            />
            <Link 
                    className='block text-center my-5 text-slate-500 uppercase text-sm text-white'
                    to="/"
                > you remember your password? Login
                </Link>
            <div className="container-button">
              <button className="buttonIniSesion" type="submit">
                Send Instructions
              </button>
            </div>
            
          </form>
        </div>
      </div>
      <Header />
      <Footer />
    </>
  );
};

export default ForgotPass;
