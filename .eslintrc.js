module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': [0],
    'no-use-before-define': [2, {
      functions: true,
      classes: true,
      variables: false,
      allowNamedExports: false,
    }],
  },
};
