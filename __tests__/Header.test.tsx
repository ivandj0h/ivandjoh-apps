import React from "react";
import { render } from '@testing-library/react';
import Header from "../src/components/section/Header";
import { MENU_ITEMS } from "@/lib/constants";

describe("Header", () => {
    it("renders the Header text", () => {
        const { getByText } = render(<Header />);
        expect(getByText("ivandjoh.com")).toBeTruthy();
    });

    it("renders navigation links", () => {
        const { getByText } = render(<Header />);
        MENU_ITEMS.forEach(item => {
            expect(getByText(item.menuTitle)).toBeTruthy();
        });
    });

    it("renders the Register button", () => {
        const { getByText } = render(<Header />);
        expect(getByText("Register")).toBeTruthy();
    });

    it("renders the SignIn button", () => {
        const { getByText } = render(<Header />);
        expect(getByText("SignIn")).toBeTruthy();
    });
});
