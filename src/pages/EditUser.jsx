import React from 'react';
import Header from '../components/Header';
import FooterCopyright from '../components/FooterCopyright';
import EditUserComp from '../components/EditUserComp';

const EditUser = () => {
  return (
    <>
    <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='BackGround'>
        <EditUserComp/>
    </div>
    <Header/>
    <FooterCopyright/>
    </>
  )
}

export default EditUser