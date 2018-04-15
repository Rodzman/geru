var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch');

// task default
gulp.task('default', ['bootstrap-scss', 'app-sass', 'watch']);

// task to bootstrap scss
gulp.task('bootstrap-scss', function () {
  return gulp.src('node_modules/bootstrap/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
});

// task to app sass
gulp.task('app-sass', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
});

// task to watch sass and scss changes
gulp.task('watch', function () {
  gulp.watch(['src/sass/**/*.sass', 'node_modules/bootstrap/scss/**/*.scss'], ['app-sass', 'bootstrap-scss']);
});
