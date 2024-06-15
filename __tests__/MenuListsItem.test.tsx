import React from "react";
import { render } from '@testing-library/react';
import MenuListsItem from "../src/components/section/MenuListsItem";
import { MENU_ITEMS } from "@/lib/constants";

describe("MenuListsItem", () => {
    it("renders all menu items", () => {
        const { getByText } = render(<MenuListsItem items={MENU_ITEMS} />);
        MENU_ITEMS.forEach(item => {
            expect(getByText(item.menuTitle)).toBeTruthy();
        });
    });

    it("renders icons for all menu items", () => {
        const { container } = render(<MenuListsItem items={MENU_ITEMS} />);
        MENU_ITEMS.forEach(item => {
            const iconElement = container.querySelector(`.${item.icon}`);
            expect(iconElement).toBeTruthy();
        });
    });
});
