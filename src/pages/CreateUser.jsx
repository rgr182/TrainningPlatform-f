import React from 'react';
import Header2 from '../components/Header2';
import FooterCopyright from '../components/FooterCopyright';
import CreateUserComp from '../components/CreateUserComp';
import Sidebar from '../components/Sidebar';

const CreateUser = () => {
  return (
    <>
    <Sidebar/>
    <CreateUserComp/>
    <FooterCopyright/>
    <Header2/>
    </>
  )
}

export default CreateUser;
