import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthMenuListsItem from '../src/components/section/AuthMenuListsItem';
import { AUTH_MENU_ITEMS } from '@/lib/constants';

describe('AuthMenuListsItem', () => {
    it('renders all auth menu items', () => {
        render(<AuthMenuListsItem items={AUTH_MENU_ITEMS} />);
        AUTH_MENU_ITEMS.forEach(item => {
            expect(screen.getByText(item.menuTitle)).toBeInTheDocument();
            expect(screen.getByText(item.menuTitle).closest('a')).toHaveAttribute('href', item.path);
        });
    });
});
