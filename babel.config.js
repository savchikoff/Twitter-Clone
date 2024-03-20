module.exports = {
	presets: ['@babel/preset-typescript', '@babel/preset-env'],
	plugins: ['react-remove-properties', { properties: ['data-cy'] }],
};
