import React from 'react';

import styles from './container.module.scss';

const Container = ({ children }) => {
    return (
        <>
            <section className={styles.container}>{children}</section>
        </>
    );
};

export default Container;
