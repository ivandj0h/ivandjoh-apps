import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layout'; // sesuaikan path impor sesuai dengan struktur proyek Anda

describe('RootLayout', () => {
    it('renders the layout with children', () => {
        render(
            <RootLayout>
                <div>Test Child</div>
            </RootLayout>
        );
        expect(screen.getByText('Test Child')).toBeDefined();
    });
});
