import React from 'react';
import PropTypes from 'prop-types';

import styles from './table.module.scss';
import TableItem from 'components/TableItem';

export const Table = ({ employees }) => {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableWrapper}>
                <table className={styles.tableEmployees}>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Data de Admissão</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <TableItem key={employee.id} employee={employee} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    employees: PropTypes.array,
    employee: PropTypes.object,
};

export default Table;
