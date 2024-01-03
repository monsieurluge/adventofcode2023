module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'standard',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'block-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
    },
}
