import React from 'react';
import Home from 'pages/Home';
import { render } from '@testing-library/react';
import axios from 'axios';
jest.mock('services/api');

describe('Requisições para API', () => {
    describe('Quando eu abro o app de lista de funcionários', () => {
        it('Exibir lista de funcionários através da API', async () => {
            axios.get = jest.fn().mockResolvedValue([
                {
                    id: 1,
                    name: 'João',
                    admission_date: '2019-12-02T00:00:00.000Z',
                    phone: '5551234567890',
                    image: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
                },
                {
                    id: 2,
                    name: 'Roberto',
                    job: 'Front-end',
                    admission_date: '2020-03-12T00:00:00.000Z',
                    phone: '5550321654789',
                    image: 'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
                },
            ]);
            render(<Home />);
        });
    });
});
