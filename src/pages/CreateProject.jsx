import React from 'react'
import { CreateProjectComp } from '../components/CreateProjectComp'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const CreateProject = () => {
  return (
    <>
        <Sidebar/>
        <CreateProjectComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}
