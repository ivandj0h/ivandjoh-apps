import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page'; // Pastikan path ini sesuai dengan struktur proyek Anda

describe('Home', () => {
    it('renders the Hello World button', () => {
        render(<Home />);
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });
});
