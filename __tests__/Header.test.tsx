import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/section/Header';
import { MENU_ITEMS, AUTH_MENU_ITEMS } from '@/lib/constants';

describe('Header', () => {
    it('renders the logo and title', () => {
        render(<Header />);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByText('ivandjoh')).toBeInTheDocument();
    });

    it('renders all main menu items', () => {
        render(<Header />);
        MENU_ITEMS.forEach(item => {
            expect(screen.getByText(item.menuTitle)).toBeInTheDocument();
        });
    });

    it('renders all auth menu items', () => {
        render(<Header />);
        AUTH_MENU_ITEMS.forEach(item => {
            expect(screen.getByText(item.menuTitle)).toBeInTheDocument();
        });
    });
});
