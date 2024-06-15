import React from "react";
import { render } from "@testing-library/react";
import { LayoutContent } from "@/app/layout";


jest.mock("../src/components/section/Header", () => ({
    __esModule: true,
    default: () => <div data-testid="mock-header">MockHeader</div>,
}));

describe("LayoutContent", () => {
    it("renders the children prop", () => {
        const { getByText } = render(
            <LayoutContent>
                <div>Test Child</div>
            </LayoutContent>
        );
        expect(getByText("Test Child")).toBeInTheDocument();
    });

    it("renders the Header component", () => {
        const { getByTestId } = render(
            <LayoutContent>
                <div>Test Child</div>
            </LayoutContent>
        );
        expect(getByTestId("mock-header")).toBeInTheDocument();
    });
});
