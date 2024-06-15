import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuListsItem from '../src/components/section/MenuListsItem';
import { MENU_ITEMS } from '@/lib/constants';

describe('MenuListsItem', () => {
    it('renders all menu items', () => {
        render(<MenuListsItem items={MENU_ITEMS} />);
        MENU_ITEMS.forEach(item => {
            expect(screen.getByText(item.menuTitle)).toBeInTheDocument();
            expect(screen.getByText(item.menuTitle).closest('a')).toHaveAttribute('href', item.path);
        });
    });
});
