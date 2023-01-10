import React from 'react';
import Header3 from '../components/Header3';
import FooterCopyright from '../components/FooterCopyright';
import CreateUserComp from '../components/CreateUserComp';
import Sidebar from '../components/Sidebar';

const CreateUser = () => {
  return (
    <>
    <Sidebar/>
    <CreateUserComp/>
    <FooterCopyright/>
    <Header3/>
    </>
  )
}

export default CreateUser;
