import React from 'react';
import Home from 'pages/Home';
import Table from 'components/Table';
import Container from 'components/UI/Container';
import { render, screen } from '@testing-library/react';
import SearchBar from 'components/SearchBar';

import tablePropsMock from 'utils/tablePropsMock';

const props = tablePropsMock;

describe('Componente Principal', () => {
    describe('Quando eu abro o app de lista de funcionários', () => {
        it('O componente Container é renderizado', () => {
            render(<Container />);
        });
        it('O componente Home é renderizado', () => {
            render(<Home />);
        });
        it('O componente SearchBar lista título da tabela', () => {
            render(<SearchBar />);
            expect(screen.getByText('Funcionários')).toBeInTheDocument();
        });
        it('O componente SearchBar retorna o input esperado', () => {
            const fn = jest.fn();
            render(<SearchBar handleChange={fn} searchValue={'name'} />);
            const input = screen.getByPlaceholderText('Pesquisar');
            expect(input.value).toBe('name');
        });
        it('O componente Table retorna funcionários', () => {
            render(<Table {...props} />);
        });
    });
});
