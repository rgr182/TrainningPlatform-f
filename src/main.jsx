/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import {ForgotPass} from './pages/ForgotPass';
import {Metrics} from './pages/Metrics';
import { useState } from 'react';
import { AuthContext } from './auth';

const main=()=>{
    const [user, setUser]=useState(()=>{
        const cachedUser=localStorage.getItem('user');
        return cachedUser ? {user: JSON.parse(cachedUser) } : {} 
    });
    //se crea una constante llamada cachedUser, el cual trae de localStorage un user(es decir que si en local storage existe este elemento)
    //En caso de que no se encuentre, su valor será asignado a la variable cachedUser
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Envolver en un provider, importarlo
        Investigar ReactRouterDOM con Vite
        }
        <Router>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/ForgotPass' element={<ForgotPass/>}/>
                <Route exact path='/metrics' element={<Metrics/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);*/

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './Styles/normalize.css'
import './Styles/StylesGeneral.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
