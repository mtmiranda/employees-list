import React from 'react';

import styles from './searchBar.module.scss';

export const SearchBar = ({ searchValue, handleChange }) => {
    return (
        <div className={styles.searchWrapper}>
            <h1>Funcionários</h1>

            <div className={styles.inputWrapper}>
                <input
                    className={styles.inputSearch}
                    type="search"
                    placeholder="Pesquisar"
                    onChange={handleChange}
                    value={searchValue}
                />
            </div>
        </div>
    );
};

export default SearchBar;
