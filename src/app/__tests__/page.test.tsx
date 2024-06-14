import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../page'; // sesuaikan path impor sesuai dengan struktur proyek Anda

describe('HomePage', () => {
    it('renders the homepage with 60 lines', () => {
        render(<HomePage />);
        expect(screen.getByText('ivandjoh.com')).toBeDefined();
        for (let i = 0; i < 60; i++) {
            expect(screen.getByText(`baris ke ${i}`)).toBeDefined();
        }
    });
});
