import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "../src/app/layout";

jest.mock("../src/components/section/Header", () => ({
    __esModule: true,
    default: () => <div data-testid="mock-header">MockHeader</div>,
}));

const originalError = console.error;

beforeAll(() => {
    console.error = (...args) => {
        if (/validateDOMNesting/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});

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
        const { getByTestId } = render(
            <RootLayout>
                <div>Test Child</div>
            </RootLayout>
        );
        expect(getByTestId("mock-header")).toBeInTheDocument();
    });
});
