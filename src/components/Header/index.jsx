import React from 'react';

import styles from './header.module.scss';

import logo from 'assets/logo.svg';

export const Header = () => {
    return (
        <section className={styles.headerContainer}>
            <header>
                <img src={logo} alt="company logo" />
            </header>
        </section>
    );
};

export default Header;
