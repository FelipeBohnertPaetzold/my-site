'use_strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
  return gulp.src('./sass/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};

function defaultTask(cb) {
  buildStyles();
  cb();
}

exports.default = defaultTask