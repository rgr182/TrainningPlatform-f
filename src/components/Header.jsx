import useAuth from "../hooks/useAuth";
import '../Styles/StylesHeaderIn.css'

const Header = () => {
  const { cerrarSesionAuth } = useAuth();
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
        </div>
        <div className="w-nav-overlay"></div>
      </div>
    </>
  )
}

export default Header;
