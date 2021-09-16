import React from 'react';

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

export default TableItem;
