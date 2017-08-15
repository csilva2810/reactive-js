var gulp = require('gulp'),
    babel = require('gulp-babel'),
    cached = require('gulp-cached'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify');

gulp.task('scripts:server', function () {
  return gulp.src('./src-server/**/*.js')
    .pipe(cached('server'))
    .pipe(babel())
    .pipe(gulp.dest('./build'));
});

gulp.task('scripts:watch:server', function () {
  return gulp.watch('./src-server/**/*.js', gulp.series(['scripts:server']));
});