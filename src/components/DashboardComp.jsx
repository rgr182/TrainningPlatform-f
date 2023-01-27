import React from 'react'
import '../Styles/StylesDashboard.css';

export const DashboardComp = () => {
    const username = ('Aldo');


    return (
        <>
            <div style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f247074ab9248794ac5c9_group_Logo.png")` }} className='Container'>
                <div className="dashContainer">
                    <div>
                        Welcome {username} to:
                    </div>
                        <img src="https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f539cc4710faaaab29c20_mind-home_Logo-06.svg" alt='mind group' className="mindLogo" />
                </div>
            </div>
        </>
    )
}
