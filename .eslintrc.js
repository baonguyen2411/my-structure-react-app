module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y'],
  rules: {
    'no-console': 2,
    'no-unused-vars': 2,
    'no-multi-spaces': 2,
    'react/prop-types': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-pascal-case': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-tag-spacing': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-boolean-value': 1,
    'react/no-array-index-key': 1,
    'react/jsx-wrap-multilines': 1,
    'react/self-closing-comp': 1,
    'jsx-quotes': 2,
    'jsx-a11y/img-redundant-alt': 2,
    'jsx-a11y/aria-role': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'postcss.config.js',
        'jest.config.js',
        'config/*.js',
        '__mocks__/*.js',
        '**/__tests__/*.test.js',
      ],
      rules: {
        'no-undef': 0,
      },
    },
  ],
};
