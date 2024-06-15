import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
    it('renders the Hello World button', () => {
        render(<Home />);
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });
});
