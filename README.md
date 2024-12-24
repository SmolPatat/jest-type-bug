# Setting up the project
Ensure you have *npm* or another similar tool installed.

Run `npm install` to install all required dependencies.

# Get type errors
Run `npm run validate` to get all TypeScript errors.

# Get runtime errors
Run `npm test` to get all Jest errors.

# About the test files
**`no-bug.test.ts`**: A reference file that shows the expected behaviour.

**`bug.test.ts`**: Demonstrates the bug with Jest type deduction.

**`bug-2.test.ts`**: Demonstrates that ""fixing"" the issue by matching the deduced type makes it worse.
