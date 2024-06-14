import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import HeaderSection from '@/components/sections/Header'; // sesuaikan path impor sesuai dengan struktur proyek Anda
import { MENU_HEADER } from '@/lib/constants';

jest.mock('next/link', () => {
    return ({ children }: { children: ReactNode }) => {
        return children;
    };
});

describe('HeaderSection', () => {
    it('renders the header with menu items', () => {
        render(<HeaderSection />);
        expect(screen.getByAltText('logo')).toBeDefined();
        MENU_HEADER.forEach((item) => {
            expect(screen.getByText(item.menuName)).toBeDefined();
        });
    });

    it('renders the login button', () => {
        render(<HeaderSection />);
        expect(screen.getByText('Login')).toBeDefined();
    });
});
