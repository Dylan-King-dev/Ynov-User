import { NavLink } from 'react-router-dom';
import '../style/header.css';

function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <ul className="site-nav">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/userList" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/connect" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Connect
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;