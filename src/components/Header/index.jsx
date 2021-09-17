import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
    logo: PropTypes.element,
};

export default Header;
