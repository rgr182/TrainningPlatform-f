import React from 'react';
import Header3 from '../components/Header3';
import FooterCopyright from '../components/FooterCopyright';
import CreateTechComp from '../components/CreateTechComp';
import Sidebar from '../components/Sidebar';

const CreateTechStack = () => {
    return (
        <>
            <Sidebar />
            <CreateTechComp />
            <FooterCopyright />
            <Header3 />
        </>
    )
}

export default CreateTechStack
