import React from 'react'
import Header3 from '../components/Header3';
import FooterCopyright from '../components/FooterCopyright';
import Sidebar from '../components/Sidebar';
import GradesSubmitComp from '../components/GradesSubmitComp';

export const GradesSubmit = () => {
  return (
    <>
    <Sidebar/>
    <GradesSubmitComp/>
    <FooterCopyright/>
    <Header3/>
    </>
  )
}
