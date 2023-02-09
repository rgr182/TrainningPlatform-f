import React from 'react'
import { CreateBootcampComp } from '../components/CreateBootcampComp'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const CreateBootcamp = () => {
  return (
    <>
        <Sidebar/>
        <CreateBootcampComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}
