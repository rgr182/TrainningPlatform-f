import { Link } from 'react-router-dom';
import '../Styles/StylesSidebar.css';

const Sidebar = () => {

  return (
    <>
      <div className="sidebar">
        <li className='buttonPrincipal'><button>Members</button>
          <ul>
            <li><Link replace={true} to="/dashboard/CreateUser" className='links'>Create User</Link></li>
            <li><Link replace={true} to="/dashboard/Users" className='links'>View Users</Link></li>
          </ul>
        </li>
        <li className='buttonPrincipal'><button>Tech Stack</button>
          <ul>
            <li><Link replace={true} to="/dashboard/CreateTechStack" className='links'>Create Tech</Link></li>
            <li><Link replace={true} to="/dashboard/ViewTechnologies" className='links'>View Techs</Link></li>
          </ul>
        </li>
        <li className='buttonPrincipal'><button>Bootcamps</button>
          <ul>
            <li><Link replace={true} to="/dashboard/CreateBootcamp" className='links'>Create Bootcamp</Link></li>
            <li><Link replace={true} to="/dashboard/ViewBootcamps" className='links'>View Bootcamps</Link></li>
            <li className='buttonPrincipal'><button className='secondaryButton'>Candidates</button>
              <ul>
                <li><Link replace={true} to="/dashboard/CreateCandidate" className='links'>Create Candidate</Link></li>
                <li><Link replace={true} to="/dashboard/ViewCandidates" className='links'>View Candidates</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='buttonPrincipal'><button>Projects</button>
          <ul>
            <li><Link replace={true} to="/dashboard/CreateProject" className='links'>Create Project</Link></li>
            <li><Link replace={true} to="/dashboard/ViewProjects" className='links'>View Projects</Link></li>
          </ul>
        </li>
      </div>
    </>
  )
}

export default Sidebar;