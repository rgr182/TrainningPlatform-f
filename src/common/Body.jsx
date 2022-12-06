import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const Body = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const user=localStorage.getItem('user');
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const sendData = async() => {
    try {
      const {data}=await axios.post(`https://localhost:7140/Login?user=${email}&password=${password}`)
      console.log("Response del server"+data);
      if(data){
        console.log("Exitoso, te has loggeado")
        localStorage.setItem('user',data)
        navigate('/metrics')
        //Guardar token en localStorage(En caso de que el usuario use la casilla recuerdame)
        //La direccion a la cual se quiere acceder
        
      }
    } catch (error) {
    }
  }
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate('/metrics');
        }
    },[user])
  return (
    <>
      <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='Container'>
        <div className='LoginSquare'>
          <div className='form-complete'>
            <div className='container-welc'>
            <div className='eti welc-et'>Bienvenido</div>
            </div>
            <div className='eti'>Ingresa tu correo:</div>
            <input type="email" value={email} onChange={onChangeEmail} />
            <div className='eti'>Contraseña:</div>
            <input type="password" value={password} onChange={onChangePassword} />
            <br />
            <div className='FgtPass'>
              <a href="./ForgotPass" className=' FgtLink'>¿Olvidaste tu contraseña?</a>
            </div>
            <br />
            <div className='container-button'>
              <button className='buttonIniSesion' onClick={sendData}>Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
