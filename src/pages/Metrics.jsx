import React from 'react'
import {Header2} from '../common/Header2'
import { FooterCopyright } from '../common/FooterCopyright'
import { MetricsP } from '../common/MetricsP';
import '../Styles/StylesFooter.css';
import '../Styles/StylesHeaderIn.css';
import '../Styles/StylesMetrics.css';
import { useAuth } from '../auth';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const Metrics = () => {
    const {user}=useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            navigate('/login');
        }
    },[user])
  return (
    <>
        <MetricsP/>
        <Header2/>
        <FooterCopyright/>
    </>
  )
}
