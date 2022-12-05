import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './Footer';
import { Header } from './Header';
import { Body } from './Body';
import './Styles/StylesBody.css';
import './Styles/StylesFooter.css';
import './Styles/StylesHeader.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
            <Body />
        <Header/>
        <Footer/>
    </React.StrictMode>
);
//investigar componente de routing en react
