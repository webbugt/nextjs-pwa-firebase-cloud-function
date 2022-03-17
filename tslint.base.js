/* eslint-disable import/no-commonjs */
module.exports = {
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            env: {
                es6: true,
                node: true
            },
            extends: ['plugin:@typescript-eslint/recommended', 'plugin:security-node/recommended', 'prettier'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                project: './tsconfig.*?.json',
                sourceType: 'module'
            },
            plugins: [
                'prefer-arrow-functions',
                'prettier',
                'import',
                'simple-import-sort',
                'security-node',
                '@typescript-eslint'
                ],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-parameter-properties': 'off',
                '@typescript-eslint/array-type': 'error',
                '@typescript-eslint/explicit-member-accessibility': [
                    'off',
                    {
                        accessibility: 'explicit'
                    }
                ],
                '@typescript-eslint/interface-name-prefix': 'off',
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'none',
                            requireLast: true
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false
                        }
                    }
                ],
                '@typescript-eslint/member-ordering': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/quotes': ['error', 'single'],
                '@typescript-eslint/semi': ['error', 'never'],
                '@typescript-eslint/unified-signatures': 'error',
                'arrow-parens': ['off', 'as-needed'],
                camelcase: 'off',
                complexity: 'off',
                'constructor-super': 'error',
                'dot-notation': 'error',
                eqeqeq: ['error', 'smart'],
                'guard-for-in': 'error',
                'id-blacklist': [
                    'error',
                    'any',
                    'Number',
                    'number',
                    'String',
                    'string',
                    'Boolean',
                    'boolean',
                    'Undefined',
                    'undefined'
                ],
                'id-match': 'error',
                'import/order': 'off',
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error',
                'sort-imports': 'off',
                'max-classes-per-file': ['error', 1],
                'max-len': [
                    1,
                    120,
                    2,
                    {
                        ignoreComments: true,
                        ignoreUrls: true
                    }
                ],
                'new-parens': 'error',
                'no-bitwise': 'error',
                'no-caller': 'error',
                'no-cond-assign': 'error',
                'no-console': 'off',
                'no-debugger': 'error',
                'no-empty': 'error',
                'no-eval': 'error',
                'no-fallthrough': 'off',
                'no-invalid-this': 'off',
                'no-new-wrappers': 'error',
                'no-shadow': 'off',
                'no-throw-literal': 'error',
                'no-trailing-spaces': 'error',
                'no-undef': 'error',
                'no-undef-init': 'error',
                'no-underscore-dangle': 'error',
                'no-unsafe-finally': 'error',
                'no-unused-expressions': 'error',
                'no-unused-labels': 'error',
                'object-shorthand': 'error',
                'one-var': ['error', 'never'],
                'prefer-arrow-functions/prefer-arrow-functions': [
                    'warn',
                    {
                        classPropertiesAllowed: false,
                        disallowPrototype: false,
                        returnStyle: 'unchanged',
                        singleReturnOnly: false
                    }
                ],
                'prettier/prettier': [
                    'warn',
                    {
                        printWidth: 120,
                        singleQuote: true,
                        tabWidth: 4,
                        semi: false,
                        trailingComma: 'none',
                        bracketSpacing: true,
                        jsxBracketSameLine: true,
                        arrowParens: 'avoid'
                    }
                ],
                radix: 'error',
                'spaced-comment': 'error',
                'use-isnan': 'error',
                'valid-typeof': 'off',
                '@typescript-eslint/await-thenable': ['error'],
                '@typescript-eslint/no-for-in-array': ['error'],
                '@typescript-eslint/no-misused-promises': ['error'],
                '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
                '@typescript-eslint/prefer-includes': ['error'],
                '@typescript-eslint/prefer-regexp-exec': ['error'],
                '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
                'require-await': ['off'],
                '@typescript-eslint/require-await': ['error'],
                '@typescript-eslint/unbound-method': ['error'],
                'no-var': ['error'],
                'prefer-const': ['error'],
                'prefer-rest-params': ['error'],
                'prefer-spread': ['off'],
                '@typescript-eslint/adjacent-overload-signatures': ['error'],
                '@typescript-eslint/ban-ts-comment': ['error'],
                '@typescript-eslint/ban-types': ['error'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'default',
                        format: ['camelCase']
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
                    },
                    {
                        selector: 'parameter',
                        format: ['camelCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow'
                    },
                    {
                        selector: 'property',
                        format: ['camelCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow'
                    },
                    {
                        selector: 'memberLike',
                        modifiers: ['private'],
                        format: ['camelCase'],
                        leadingUnderscore: 'allow'
                    },
                    {
                        selector: 'enumMember',
                        format: ['camelCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow'
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase']
                    }
                ],
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/consistent-type-assertions': ['error'],
                'no-array-constructor': ['off'],
                '@typescript-eslint/no-array-constructor': ['error'],
                'no-empty-function': ['off'],
                '@typescript-eslint/no-empty-function': ['error'],
                '@typescript-eslint/no-empty-interface': ['error'],
                '@typescript-eslint/no-inferrable-types': ['error'],
                '@typescript-eslint/no-misused-new': ['error'],
                '@typescript-eslint/no-namespace': ['error'],
                '@typescript-eslint/no-non-null-assertion': ['warn'],
                '@typescript-eslint/no-this-alias': ['error'],
                'no-unused-vars': ['off'],
                '@typescript-eslint/no-unused-vars': ['warn'],
                'no-use-before-define': ['off'],
                '@typescript-eslint/no-var-requires': ['error'],
                '@typescript-eslint/prefer-namespace-keyword': ['error'],
                '@typescript-eslint/triple-slash-reference': ['error'],
                '@typescript-eslint/type-annotation-spacing': ['error'],
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // Packages. `react` related packages come first.
                            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                            ['^@?\\w'],
                        ]
                    }
                ]
            }
        }
    ]
}
