import React from 'react';

export const Header = () => {
  return (
    <>
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="mindnavbar w-nav">
        <div className="container-17 w-container">
          <a href="https://mindhub.mx" className='w-nav-brand'>
          <img src="https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f539cc4710faaaab29c20_mind-home_Logo-06.svg" className='image-89'/>
          </a>
            <nav role="navigation" className="nav-menu-2 w-nav-menu">
              <a href="https://www.mindhub.mx/events" className="mindnavlinks">Events</a>
              <a href="https://www.mindhub.mx/careers" className="mindnavlinks" >Careers</a>
              <a href="https://www.mindhub.mx/contact" className="mindnavlinks" >Contact</a>
            </nav>
            <div className="menu-button-3 w-nav-button">
              <div className="w-icon-nav-menu">
              </div>
            </div>
        </div>
              <div className="w-nav-overlay">
              </div>
      </div>
    </>
  )
}
