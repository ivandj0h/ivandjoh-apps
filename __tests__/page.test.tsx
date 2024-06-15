import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
    it('renders the Generate Text button', () => {
        render(<Home />);
        expect(screen.getByText('Generate Text')).toBeInTheDocument();
    });

    it('does not render any Lorem Ipsum texts initially', () => {
        render(<Home />);
        const paragraphs = screen.queryAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./);
        expect(paragraphs).toHaveLength(0);
    });

    it('generates 30 Lorem Ipsum texts when button is clicked', () => {
        render(<Home />);
        const button = screen.getByText('Generate Text');
        fireEvent.click(button);
        const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./);
        expect(paragraphs).toHaveLength(30);
    });

    it('generates 60 Lorem Ipsum texts when button is clicked twice', () => {
        render(<Home />);
        const button = screen.getByText('Generate Text');
        fireEvent.click(button);
        fireEvent.click(button);
        const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./);
        expect(paragraphs).toHaveLength(60);
    });
});
