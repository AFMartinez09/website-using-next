'use client';

import styles from './Links.module.css';
import NavLink from "../navLink/navLink";
import { useState } from 'react';
import Image from 'next/image';

// ! Atomic design of Links and Navbar only recieve one component

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
    
  const userSession:boolean = true; 
  const adminSession:boolean = true; 

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link => (
          <NavLink item={link} key={link.title}/> 
        )))}{
        userSession ?  (
          <>
          {
            adminSession && (
              <NavLink item={{title: 'Admin', path: '/admin'}} />
            )
          }
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{title: 'Login', path: '/login'}} />
        )}
      </div>
      <Image 
        src='/menu.svg' 
        alt='' width={40} 
        height={40}
        className={styles.btnHamburger}
        onClick={() => setOpen((prev) => !prev)}
        />
      {
        open && (
          <div className={styles.hamburger}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
      )}
    </div>
  )
}

export default Links