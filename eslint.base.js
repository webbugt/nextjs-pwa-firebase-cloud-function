/* eslint-disable import/no-commonjs */
module.exports = {
    overrides: [
        {
            files: ['**/*.js', '**/*.jsx'],
            parser: '@babel/eslint-parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            env: {
                browser: true,
                node: true,
                es6: true
            },
            globals: {
                sessionStorage: true,
                localStorage: false,
                google: true,
                gapi: true,
                dataLayer: true,
                window: true,
                document: true,
                fetch: false,
                it: true,
                expect: true,
                cExpect: true,
                assert: true,
                describe: true
            },
            extends: ['airbnb', 'prettier', 'plugin:react/recommended'],
            plugins: [
                'module-resolver',
                'react',
                'prettier',
                'import',
                'react-hooks',
                'simple-import-sort'
            ],
            rules: {
                curly: ['error', 'all'],
                'no-shadow': [
                    'error',
                    {
                        allow: ['props']
                    }
                ],
                'import/extensions': [
                    'error',
                    'never',
                    {
                        svg: 'always',
                        css: 'always',
                        mdx: 'always',
                        json: 'always',
                        ts: 'always'
                    }
                ],
                'import/no-cycle': [2, { maxDepth: 1 }],
                'import/no-unresolved': 'off',
                'import/no-commonjs': [
                    2,
                    {
                        allowRequire: true,
                        allowPrimitiveModules: true
                    }
                ],
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        peerDependencies: true
                    }
                ],
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error',
                'sort-imports': 'off',
                'jsx-a11y/anchor-is-valid': [
                    'error',
                    {
                        components: ['Link'],
                        specialLink: ['hrefLeft', 'hrefRight'],
                        aspects: ['invalidHref', 'preferButton']
                    }
                ],
                'react/jsx-props-no-spreading': 'off',
                'react/state-in-constructor': 'off',
                'no-const-assign': 'warn',
                'no-this-before-super': 'warn',
                'no-undef': 'error',
                'no-unreachable': 'warn',
                'no-underscore-dangle': [
                    'error',
                    {
                        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', '_allPostsMeta']
                    }
                ],
                'react/prop-types': [
                    'error',
                    {
                        ignore: ['children', 'style', 'forwardRef', 'ref', 'classes', 'className', 'theme']
                    }
                ],
                'no-unused-vars': [
                    'error',
                    {
                        vars: 'local',
                        args: 'none',
                        ignoreRestSiblings: true,
                        varsIgnorePattern: '^_'
                    }
                ],
                'no-multiple-empty-lines': [
                    'error',
                    {
                        max: 1
                    }
                ],
                'constructor-super': 'warn',
                'valid-typeof': 'warn',
                'comma-spacing': 'warn',
                'computed-property-spacing': 'warn',
                'class-methods-use-this': 'off',
                'max-len': [
                    1,
                    120,
                    2,
                    {
                        ignoreComments: true,
                        ignoreUrls: true
                    }
                ],
                'quote-props': [1, 'as-needed'],
                'no-param-reassign': [
                    'error',
                    {
                        props: false
                    }
                ],
                'linebreak-style': ['error', 'unix'],
                'no-trailing-spaces': [
                    'warn',
                    {
                        skipBlankLines: true
                    }
                ],
                'prefer-destructuring': [
                    'error',
                    {
                        object: true,
                        array: false
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
                'func-names': [
                    'error',
                    'always',
                    {
                        generators: 'as-needed'
                    }
                ],
                'react/display-name': 'off',
                'react/react-in-jsx-scope': 'off',
                'react/jsx-filename-extension': 'off',
                'react/jsx-indent': ['error', 4],
                'react/jsx-indent-props': ['error', 4],
                'react/jsx-closing-bracket-location': [
                    1,
                    {
                        selfClosing: 'line-aligned',
                        nonEmpty: 'after-props'
                    }
                ],
                'import/prefer-default-export': 'off',
                'react-hooks/rules-of-hooks': 'error',
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // Packages. `react` related packages come first.
                            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                            ['^react', '^@?\\w'],
                        ]
                    }
                ]
            }
        }
    ]
}
