import React from 'react'
import Header3 from '../components/Header3';
import FooterCopyright from '../components/FooterCopyright';
import Sidebar from '../components/Sidebar';
import TableProjects from '../components/TableProjects';

export const ViewProjects = () => {
    return (
        <>
            <Sidebar />
            <TableProjects />
            <FooterCopyright />
            <Header3 />
        </>
    )
}
