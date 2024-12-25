const eslintPluginTypescript = require('@typescript-eslint/eslint-plugin');
const eslintParserTypescript = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: ['.next/**'], // Ensure .next folder is globally ignored
    files: ['**/*.{js,jsx,ts,tsx}'], // Match files to lint
    languageOptions: {
      parser: eslintParserTypescript, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest', // Latest ECMAScript version
        sourceType: 'module', // Enable ES modules
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
    },
    rules: {
      // Add your ESLint rules here
      'no-console': ['warn', { allow: ['error', 'warn'] }],
    },
  },
];
