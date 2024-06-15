import React from "react";
import { render } from "@testing-library/react";
import { LayoutContent } from "@/app/layout";
import { expect, jest, describe, it } from '@jest/globals';

const MockHeader = () => <div>Header</div>;
MockHeader.displayName = "MockHeader";

jest.mock("@/components/section/Header", () => MockHeader);

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
