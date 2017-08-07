module.exports = {
	extends: ['prettier'],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module' // es6 import/export
	},
	parser: 'babel-eslint', // class properties
	plugins: ['prettier'],
	env: {
		es6: true,
		node: true,
		browser: true,
		jest: true
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				semi: false,
				jsxBracketSameLine: true,
				printWidth: 100
			}
		]
	}
}
