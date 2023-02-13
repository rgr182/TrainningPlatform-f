import React from 'react'
import EditTechComp from '../components/EditTechComp'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const EditTech = () => {
  return (
    <>
        <Sidebar/>
        <EditTechComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}