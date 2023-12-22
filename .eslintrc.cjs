module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'block-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4]
    }
}
