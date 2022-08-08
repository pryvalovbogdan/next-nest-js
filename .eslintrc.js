module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir : __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		// 0 - turn the rule off
		// 1 - turn the rule on as a warning (doesn't affect exit code)
		// 2 - turn the rule on as an error (exit code will be 1)

		// Prettier configuration
		"prettier/prettier": ["error", {
			"jsxBracketSameLine": false,  // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
			"jsxSingleQuote": true,       // Use single quotes instead of double quotes in JSX
			"printWidth": 120,            // Specify the line length that the printer will wrap on
			"semi": true,                 // Print semicolons at the ends of statements.
			"singleQuote": true,          // Use single quotes instead of double quotes.
			"tabWidth": 2,                // Specify the number of spaces per indentation-level.
			"trailingComma": "all",       // Print trailing commas wherever possible when multi-line.
			"useTabs": false,             // Indent lines with tabs instead of spaces.
			"endOfLine": "lf",            // Line Feed only (\n),
			"arrowParens": "avoid"        // Include parentheses around a sole arrow function parameter.
		}],



	},
};
