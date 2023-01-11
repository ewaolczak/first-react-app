import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <a href='/'>
          <span className='fa fa-tasks'></span>
        </a>
        <ul className={styles.nav_list}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/favorite'>Favorite</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
