module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "import/extensions": "off",
    "@typescript-eslint/no-unused-vars": "off"

  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json"
  }
};
