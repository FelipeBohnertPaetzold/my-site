'use_strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
  return gulp.src('sass/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('public'));
}

function defaultTask(cb) {
  buildStyles();
  cb();
}

exports.default = defaultTask