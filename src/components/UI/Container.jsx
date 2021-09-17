import React from 'react';
import PropTypes from 'prop-types';

import styles from './container.module.scss';

const Container = ({ children }) => {
    return (
        <>
            <section className={styles.container}>{children}</section>
        </>
    );
};

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;
