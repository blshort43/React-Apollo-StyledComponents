module.exports = {
  extends: ['mycustom/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['/*.*'],
  rules: {},
};
