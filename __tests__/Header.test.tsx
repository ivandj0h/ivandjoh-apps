import React from "react";
import { render } from '@testing-library/react';
import Header from "../src/components/section/Header";

describe("Header", () => {
    it("renders the Header text", () => {
        const { getByText } = render(<Header />);
        expect(getByText("Header")).toBeInTheDocument();
    });
});
