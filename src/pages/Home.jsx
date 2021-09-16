import React, { useEffect, useState } from 'react';
import { useDebounce } from 'Hooks/useDebounce';

import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Table from 'components/Table';

import { api } from 'services/api';

import styles from './home.module.scss';
import useLoader from 'Hooks/useLoader';

function Home() {
    const [employees, setEmployees] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const debouncedText = useDebounce(searchValue, 500);
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        console.log(debouncedText);
    }, [debouncedText]);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const filteredEmployees = !!searchValue
        ? employees.filter((employee) => {
              const objEmployees = {
                  name: employee.name,
                  job: employee.job,
              };
              return `${objEmployees.name}${objEmployees.job}`
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
          })
        : employees;

    useEffect(() => {
        showLoader();
        try {
            api.get('/employees')
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        setEmployees(response.data);
                        setTimeout(() => {
                            hideLoader();
                        }, 1);
                    } else {
                        throw new Error('Request Error');
                    }
                })
                .catch((err) => {
                    console.log('Error', err);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <SearchBar
                    searchValue={searchValue}
                    handleChange={handleChange}
                />

                {filteredEmployees.length > 0 && (
                    <Table employees={filteredEmployees} />
                )}

                {filteredEmployees.length === 0 && !!searchValue && (
                    <p className={styles.employeeNotFound}>
                        Funcionário não encontrado...
                    </p>
                )}

                {loader}
            </main>
        </>
    );
}

export default Home;
