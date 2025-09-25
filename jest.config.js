export default {
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testEnvironment: 'jsdom',
    // moduleNameMapping: {
    // '\\.(css|scss|sass)$': 'identity-obj-proxy',
    // '^(\\.{1,2}/.*)\\.js$': '$1', // Add this for ESM imports
    // },
    globals: {
        'ts-jest': {
            useESM: true,
            tsconfig: {
                jsx: 'react-jsx'
            }
        }
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};