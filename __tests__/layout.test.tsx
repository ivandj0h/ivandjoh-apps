import React from "react";
import { render } from "@testing-library/react";
import RootLayout, { LayoutContent } from "../src/app/layout";
import { expect, jest, describe, it } from '@jest/globals';

jest.mock("@/components/section/Header", () => () => <div>Header</div>);

describe("RootLayout", () => {
    it("renders the children prop inside body", () => {
        const { getByText, container } = render(
            <RootLayout>
                <div>Test Child</div>
            </RootLayout>
        );
        expect(container.querySelector("body")!.contains(getByText("Test Child"))).toBe(true);
    });

    it("renders the Header component inside body", () => {
        const { getByText, container } = render(
            <RootLayout>
                <div>Test Child</div>
            </RootLayout>
        );
        expect(container.querySelector("body")!.contains(getByText("Header"))).toBe(true);
    });
});

describe("LayoutContent", () => {
    it("renders the children prop", () => {
        const { getByText } = render(
            <LayoutContent>
                <div>Test Child</div>
            </LayoutContent>
        );
        expect(getByText("Test Child")).toBeTruthy();
    });

    it("renders the Header component", () => {
        const { getByText } = render(
            <LayoutContent>
                <div>Test Child</div>
            </LayoutContent>
        );
        expect(getByText("Header")).toBeTruthy();
    });
});
