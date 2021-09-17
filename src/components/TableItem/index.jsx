import React from 'react';
import PropTypes from 'prop-types';

import styles from './tableItem.module.scss';

import { formatPhoneNumber } from 'helpers/formatPhoneNumber';

const TableItem = ({ employee }) => {
    return (
        <tr className={styles.tableItem}>
            <td>
                <img
                    className={styles.employeeImg}
                    src={employee.image}
                    alt="employeePhoto"
                />
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(employee.admission_date),
                )}
            </td>
            <td>{formatPhoneNumber(employee.phone)}</td>
        </tr>
    );
};

TableItem.propTypes = {
    employee: PropTypes.object,
    formatPhoneNumber: PropTypes.func,
};

export default TableItem;
