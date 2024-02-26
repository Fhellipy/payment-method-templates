import type { Config } from 'jest';
import nextJest from 'next/jest';

const nextJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/@types/**/*',
		'!src/styles/**/*',
		'!src/**/*.stories.tsx',
		'!src/**/*.stories.ts',
		'!src/**/types.ts',
		'!src/**/layout.tsx',
	],
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['/node_modules', '/.next/'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/jest.setup.ts'],
};

export default nextJestConfig(config);
