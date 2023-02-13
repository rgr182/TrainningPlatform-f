import React from 'react'
import EditCandidateComp from '../components/EditCandidateComp'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const EditCandidate = () => {
  return (
    <>
        <Sidebar/>
        <EditCandidateComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}