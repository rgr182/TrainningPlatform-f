import React from 'react'
import { EditBootcampComp } from '../components/EditBootcampComp'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const EditBootcamp = () => {
  return (
    <>
        <Sidebar/>
        <EditBootcampComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}
