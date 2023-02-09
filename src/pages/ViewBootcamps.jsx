import React from 'react'
import Header3 from '../components/Header3';
import FooterCopyright from '../components/FooterCopyright';
import Sidebar from '../components/Sidebar';
import TablaBootcamp from '../components/TableBootcamp';

export const ViewBootcamps = () => {
    return (
        <>
            <Sidebar />
            <TablaBootcamp />
            <FooterCopyright />
            <Header3 />
        </>
    )
}
