import React from 'react';
import Home from 'pages/Home';
import Container from 'components/UI/Container';
import { render } from '@testing-library/react';

describe('Componente Principal', () => {
    describe('Quando eu abro o app de lista de funcionários', () => {
        it('O componente Container é renderizado', () => {
            render(<Container />);
        });
        it('O componente Home é renderizado', () => {
            render(<Home />);
        });
    });
});
