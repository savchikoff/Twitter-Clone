module.exports = {
	preset: 'ts-jest',
	transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
	},
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
