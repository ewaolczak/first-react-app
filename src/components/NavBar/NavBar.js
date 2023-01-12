import React from 'react';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <Link to='/'>
          <span className='fa fa-tasks'></span>
        </Link>
        <ul className={styles.nav_list}>
          <li>
            <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to='/favorite'>Favorite</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
