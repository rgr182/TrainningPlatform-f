import React from 'react'
import CreateCandidateComp from '../components/CreateCandidate'
import FooterCopyright from '../components/FooterCopyright'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'

export const CreateCandidate = () => {
  return (
    <>
        <Sidebar/>
        <CreateCandidateComp/>
        <FooterCopyright/>
        <Header3/>
    </>
  )
}
