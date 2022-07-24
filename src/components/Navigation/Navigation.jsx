import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppContext } from '../../store/context/app';

import styles from './navigation.module.scss';

function Navigation() {
  const { user, logout } = useContext(AppContext);

  const handleLogout = () => logout();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        {user && (
          <>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? `${styles.activeNavLink} ${styles.navLink}` : styles.navLink
              }>
              <li>{user.userName}</li>
            </NavLink>
            <Link to='/' className={styles.navLink} onClick={handleLogout}>
              <li>logout</li>
            </Link>
          </>
        )}
        {!user && (
          <>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? `${styles.activeNavLink} ${styles.navLink}` : styles.navLink
              }>
              <li>home</li>
            </NavLink>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive ? `${styles.activeNavLink} ${styles.navLink}` : styles.navLink
              }>
              <li>log in</li>
            </NavLink>
            <NavLink
              to='/register'
              className={({ isActive }) =>
                isActive ? `${styles.activeNavLink} ${styles.navLink}` : styles.navLink
              }>
              <li>register</li>
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
