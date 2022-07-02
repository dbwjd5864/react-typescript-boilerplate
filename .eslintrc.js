module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
		// eslint의 typescript 포매팅 기능을 제거(eslint-config-prettier)
		'prettier/@typescript-eslint',
		// eslint의 포매팅 기능을 prettier로 사용함. 항상 마지막에 세팅 되어야 함.
		'plugin:prettier/recommended', // (eslint-plugin-prettier)
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {},
};
