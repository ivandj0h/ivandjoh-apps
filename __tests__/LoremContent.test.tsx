import React from 'react';
import { render, screen } from '@testing-library/react';
import LoremContent from '../src/components/section/LoremContent';

describe('LoremContent', () => {
    it('renders the correct number of lorem ipsum texts', () => {
        render(<LoremContent count={30} />);
        const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./);
        expect(paragraphs).toHaveLength(30);
    });

    it('renders no content when count is 0', () => {
        render(<LoremContent count={0} />);
        const paragraphs = screen.queryAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./);
        expect(paragraphs).toHaveLength(0);
    });

    it('renders the correct number of lorem ipsum texts when count is 10', () => {
        render(<LoremContent count={10} />);
        const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./);
        expect(paragraphs).toHaveLength(10);
    });
});
