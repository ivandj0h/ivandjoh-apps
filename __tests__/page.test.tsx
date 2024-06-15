import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeAll(() => {
        // Mock console.log
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterAll(() => {
        // Restore console.log
        consoleLogSpy.mockRestore();
    });

    it('renders the Hello World button', () => {
        render(<Home />);
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });

    it('handles button click', () => {
        render(<Home />);
        const button = screen.getByText('Hello World!');
        fireEvent.click(button);
        // Verifikasi bahwa console.log dipanggil dengan argumen yang benar
        expect(consoleLogSpy).toHaveBeenCalledWith('Button clicked');
    });
});
