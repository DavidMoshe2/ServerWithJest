module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'ts', 'd.ts'],
    transform: {
        '^.+\\.ts$': ['ts-jest', {tsconfig: 'tsconfig.test.json'}] 
    },
}