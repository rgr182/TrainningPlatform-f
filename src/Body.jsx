import React from 'react'


export const Body = () => {
  return (
    <>
      <div style={{backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")`}} className='Container'>
        <div className='LoginSquare'>
          <form action="">
            <div className='eti welc-et'>Bienvenido</div>
            <div className='eti'>Ingresa tu correo:</div>
            <input type="email" />
            <div className='eti'>Contraseña:</div>
            <input type="password" />
            <br />
            <div className='FgtPass'>
              <a href="./ForgotPass" className=' FgtLink'>¿Olvidaste tu contraseña?</a>
            </div>
            <br />
            <button className='buttonIniSesion'>Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </>
  )
}
