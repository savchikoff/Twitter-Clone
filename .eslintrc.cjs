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
	plugins: ['react-refresh', 'simple-import-sort'],
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'react/function-component-definition': 'off',
		'arrow-body-style': 'off',
		'import/extensions': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'import/prefer-default-export': 'off',
		'no-console': 'off',
		'react/require-default-props': 'off',
		'no-restricted-globals': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react-refresh/only-export-components': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'react/jsx-props-no-spreading': 'off',
		'consistent-return': 'off',
		'no-useless-escape': 'off',
		'react/prop-types': 'off',
		'react-hooks/exhaustive-deps': 'off',
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
};
