import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "../src/app/layout";
import { expect, jest, describe, it, beforeAll, afterAll } from '@jest/globals';

const MockHeader = () => <div>Header</div>;
MockHeader.displayName = "MockHeader";

jest.mock("@/components/section/Header", () => MockHeader);

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
        const { getByText, container } = render(
            <RootLayout>
                <div>Test Child</div>
            </RootLayout>
        );
        expect(container.querySelector("body")!.contains(getByText("Header"))).toBe(true);
    });
});
