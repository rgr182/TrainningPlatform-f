import React from 'react'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'
import TableTechMember from '../components/TableTechMember'

export const ViewTechAssigned = () => {
  return (
    <>
        <Sidebar/>
        <TableTechMember/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}
