module.exports = {
  'src/**/*.ts': ['eslint'],
  'src/**/*.less': ['npm run lint:style'],
  '*.{ts,js,json,html,css,scss,less,md,yml}': ['prettier --write'],
};
