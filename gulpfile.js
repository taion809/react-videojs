var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('gulp-run');

gulp.task('test-watch', function() {
  watch(['src/**/*.js', 'src/**/*.jsx'], function() {
    run('babel-tape-runner src/**/*.spec.js').exec();
  });
});
