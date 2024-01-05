module.exports = {
  root: true,
  env: {
    browser: true, // Enables browser global variables
    es2021: true, // Enables ES2021 syntax support
  },
  extends: [
    "eslint:recommended", // Use the recommended rules from eslint
    "plugin:@typescript-eslint/recommended", // Use the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:react/recommended", // Use the recommended rules from eslint-plugin-react
    "plugin:react-hooks/recommended", // Use the recommended rules from eslint-plugin-react-hooks
    "prettier", // Enables eslint-config-prettier to disable ESLint rules that might conflict with Prettier
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // Ignore the build directory and this config file
  parser: "@typescript-eslint/parser", // Use the parser from @typescript-eslint/parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React to use
    },
  },
  plugins: [
    "react", // Enables eslint-plugin-react for React specific linting rules
    "react-refresh",
    "@typescript-eslint", // Enables eslint-plugin-@typescript-eslint for TypeScript specific linting rules
    "prettier", // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
  ],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "react/react-in-jsx-scope": "off", // Disable the rule requiring React to be in scope
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disables the need to define a return type for every function/module
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
