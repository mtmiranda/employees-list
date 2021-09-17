import React from 'react';
import PropTypes from 'prop-types';

import styles from './loader.module.scss';

import employeeLoader from 'assets/employee-loader.png';

const Loader = () => {
    return <img className={styles.loader} src={employeeLoader} alt="" />;
};

Loader.propTypes = {
    employeeLoader: PropTypes.element,
};
export default Loader;
