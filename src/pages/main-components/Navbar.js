import React from 'react';
import styles from './Navbar.module.css'
import logo from './assets/Tmlab-Logo.svg'
import home from './assets/icon-home.svg'
import apps from './assets/icon-apps.svg'
import contact from './assets/icon-contact.svg'
import connect from './assets/icon-connect.svg'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Menu />
            <div className={styles.logo}>
                <a href='/'>
                    <img src={logo} alt='Tmlab Logo' />
                </a>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <div className={styles.menu}>
            <input type='checkbox' />
            <span></span>
            <span></span>
            <span></span>
            <nav>
                <ul>
                    <li>
                        <a href='/'>
                            Home <img src={home} alt='icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Apps <img src={apps} alt='icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Contact <img src={contact} alt='icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Connect <img src={connect} alt='icon' />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;