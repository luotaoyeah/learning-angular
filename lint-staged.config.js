module.exports = {
  'src/**/*.ts': ['eslint'],
  'projects/learning-angular-lib/src/**/*.ts': ['eslint'],
  'src/**/*.less': ['npm run lint:style'],
  'projects/learning-angular-lib/src/**/*.less': ['npm run lint:style'],
  '*.{ts,js,json,html,css,scss,less,md,yml}': ['prettier --write'],
};
