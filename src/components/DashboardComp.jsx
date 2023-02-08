import React from 'react'
import '../Styles/StylesDashboard.css';
import useAuth from '../hooks/useAuth';

export const DashboardComp = () => {
    const { auth } = useAuth();

    return (
        <>
            <div className='Container'>
                <div className="dashContainer">
                    <div>
                        Welcome  to:
                    </div>
                        <img src="https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f539cc4710faaaab29c20_mind-home_Logo-06.svg" alt='mind group' className="mindLogo" />
                </div>
            </div>
        </>
    )
}
