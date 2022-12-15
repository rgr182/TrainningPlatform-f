import '../Styles/StylesHeader.css';
const Header = () => {
  return (
    <>
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="mindnavbar w-nav">
        <div className="container-17 w-container">
          <a href="https://www.mindhub.mx" className="w-nav-brand">
          <img src="https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f539cc4710faaaab29c20_mind-home_Logo-06.svg" loading="lazy" alt="mind group" className="image-89"/>
            </a>
            <nav role="navigation" className="nav-menu-2 w-nav-menu">
              <a href="https://www.mindhub.mx/events" className="mindnavlinks w-nav-link">Events</a>
              <a href="https://www.mindhub.mx/careers" className="mindnavlinks w-nav-link">Careers</a>
              <a href="https://www.mindhub.mx/contact" className="mindnavlinks w-nav-link">Contact</a>
            </nav>
            <div className="menu-button-3 w-nav-button" aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
              <div className="w-icon-nav-menu">
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Header;
