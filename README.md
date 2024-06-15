# ivandjoh.com (on development progress...)

## Project Portfolio Description

### About the Project

This personal website is designed to showcase information about myself, my portfolio of work, and my blog posts. The
primary goal of this project is to create a platform that allows others to get to know me better, view my work, and read
my thoughts and experiences shared through the blog.

## The Application Architecture

```
On Progress ...
```

## Unit Test

### Development Process Using TDD for a Personal Website

Implementing a personal website using the Test-Driven Development (TDD) approach involves several steps. Here’s a
detailed step-by-step guide on how to proceed

- Step 1: Planning and Requirements Gathering
  Before writing any code, gather all requirements and plan the features of your personal website. Determine what you
  want to include in the About, Portfolio, and Blog sections.
- Step 2: Set Up the Project
    - Initialize the Project
    - Install Necessary Dependencies
- Step 3: Set Up Testing Framework

  For `Testing` i use `Jest`, here some of the setups :

    - Here is my `Jest Configuration` on file `jest.config.ts`

    ```typescript
    const createJestConfig = nextJest({
    dir: './',
    });
    
    const customJestConfig: Config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
  };
  ```
    - This is my `jest.setup.ts` file

  ```typescript
  import '@testing-library/jest-dom'
  ```

- Step 4: Write Initial Tests (Red Phase)
  For `details of the Test Cases` you can find it directly on the folder `__test__`

### All Unit Test Command

This test command use for all components testing

```bash
    npm test (for all components)
   ```

### Specific Test ( ex: layout component )

This test command use for a specific component testing

```bash
    npm test -- --testPathPattern=layout
```

### Unit Test Captured

This is `The Result` of `Current Test` on `June 15th, 2024`

![layout](/public/unit_test/all_test_001.png)

