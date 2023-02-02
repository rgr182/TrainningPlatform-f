import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { render } from "react-dom";
import CreateUser from "../pages/CreateUser";
import "../Styles/StylesHeaderIn.css";
import Metrics from "../pages/Metrics";

const Header2 = () => {
  const { auth, cerrarSesionAuth } = useAuth();
  const handleCerrarSesion = () => {
    cerrarSesionAuth();
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="mindnavbar w-nav">
        <div className="container-17 w-container">
          <a href="https://mindhub.mx" className="w-nav-brand">
            <img
              src="https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f539cc4710faaaab29c20_mind-home_Logo-06.svg"
              className="image-89"
            />
          </a>
          <nav role="navigation" className="nav-menu-secondary w-nav-menu">
            <Link to="Metrics" className="mindnavlinks">
              Metrics
            </Link>
            {auth.isAdmin == true ? (
              <Link to="CreateUser" className="mindnavlinks">
                Admin
              </Link>
            ) : (
              () => {}
            )}
            <a href="#" className="mindnavlinks" onClick={handleCerrarSesion}>
              Log Out
            </a>
          </nav>
          <div className="menu-button-3 w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
        <div className="w-nav-overlay"></div>
      </div>
    </>
  );
};

export default Header2;
