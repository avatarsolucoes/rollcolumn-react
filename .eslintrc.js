module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-restricted-properties': 'off',
    'no-console': 'warn',
    'no-plusplus': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'max-len': [2, 120, 4, { ignoreUrls: true, ignoreComments: true }],
    '@typescript-eslint/interface-name-prefix' : 'off',
    '@typescript-eslint/explicit-function-return-type': "off",
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}], // jest test
    'import/extensions': [
      'error',
      'ignorePackages', { ts: 'never', js: 'never' },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        '@typescript-eslint/no-this-alias': ["error"],
        '@typescript-eslint/no-unused-vars': ["error"],
        '@typescript-eslint/no-empty-function': ["error"],
      }
    }
  ],
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    "node": {
      "extensions": [".js", ".ts"],
      "moduleDirectory": ['node_modules', 'src/'],
    },
  },
};
