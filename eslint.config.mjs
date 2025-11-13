import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.mocha,
                ...globals.es2021
            }
        },
        rules: {}
    },
    {
        ignores: ['node_modules/**', 'eslint.config.mjs']
    }
];

