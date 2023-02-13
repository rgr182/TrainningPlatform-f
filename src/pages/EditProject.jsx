import React from 'react'
import { EditProjectComp } from '../components/EditProjectComp'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const EditProject = () => {
  return (
    <>
        <Sidebar/>
        <EditProjectComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}
