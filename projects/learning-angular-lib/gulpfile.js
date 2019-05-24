'use strict';

const { parallel, src, dest } = require('gulp');

function copySchemas() {
  return src(['schematics/*/schema.json']).pipe(
    dest('../../dist/learning-angular-lib/schematics/'),
  );
}

function copyFiles() {
  return src(['schematics/*/files/**']).pipe(
    dest('../../dist/learning-angular-lib/schematics/'),
  );
}

function copyCollection() {
  return src(['schematics/collection.json']).pipe(
    dest('../../dist/learning-angular-lib/schematics/'),
  );
}

exports.copy = parallel(copySchemas, copyFiles, copyCollection);
