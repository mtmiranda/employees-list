import React from 'react';

import styles from './loader.module.scss';

import employeeLoader from 'assets/employee-loader.png';

const Loader = () => {
    return <img className={styles.loader} src={employeeLoader} alt="" />;
};

export default Loader;
