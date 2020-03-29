module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
    'prettier/prettier': [
      'error',
      {
        semi: true,
      },
    ],
  },
};
