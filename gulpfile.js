var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssMin = require('gulp-css');
    watch = require('gulp-watch');
    concat = require('gulp-concat');

// task default
gulp.task('default', ['bootstrap-scss', 'app-sass', 'fontawesome', 'cssMinfy']);

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

// task to font-awesome sass
gulp.task('fontawesome', function () {
  return gulp.src('node_modules/@fortawesome/fontawesome-free-webfonts/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task('cssMinfy', function(){
  return gulp.src('src/assets/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('src/assets/css'));
});

// task to watch sass and scss changes
gulp.task('watch', function () {
  gulp.watch(['src/sass/**/*.sass', 'node_modules/bootstrap/scss/**/*.scss'], ['app-sass', 'bootstrap-scss']);
});
