import React from 'react'
import Header3 from '../components/Header3';
import FooterCopyright from '../components/FooterCopyright';
import Sidebar from '../components/Sidebar';
import TableCandidates from '../components/TableCandidates';

export const ViewCandidates = () => {
  return (
    <>
    <Sidebar/>
    <TableCandidates/>
    <FooterCopyright/>
    <Header3/>
    </>
  )
}
