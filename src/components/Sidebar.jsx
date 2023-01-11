import { Link } from 'react-router-dom';
import '../Styles/StylesSidebar.css';

const Sidebar = () => {

  return (
    <>
      <div className="sidebar">
        <li className='buttonPrincipal'><button>Members</button>
          <ul>
            <li><Link replace={true} to="/dashboard/CreateUser" className='links'>Create User</Link></li>
            <li><Link replace={true} to="/dashboard/EditUser" className='links'>Edit User</Link></li>
          </ul>
        </li>
        <li className='buttonPrincipal'><button>Tech Stack</button>
          <ul>
            <li><Link replace={true} to="/dashboard/CreateTechStack" className='links'>Create Tech</Link></li>
            <li><a href="" className='links'>Edit Tech</a></li>
          </ul>
        </li>
      </div>
    </>
  )
}

export default Sidebar;