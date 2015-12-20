var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');  
var buffer = require('vinyl-buffer');

var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var traceur = require('gulp-traceur');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

gulp.task('img', function() {
  gulp.src('./src/img/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'));
});

gulp.task('jshint', function() {
  gulp.src('./src/js/**/*.{js}')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function() {
  gulp.src('./src/js/**/*.{js,jsx}')
    .pipe(traceur())
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function() {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watchify', function() {
  var b = browserify({
    entries: './src/js/index.js', 
    debug: true
  }).transform(babelify, {
    presets: ['es2015', 'react']
  });

  return b.bundle()
    .on('error', util.log)
    .pipe(source('index.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/img/**/*.{jpg,jpeg,png,gif,svg}', ['img']);
  gulp.watch('./src/js/**/*.{js}', ['jshint']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.{js,jsx}', ['watchify']);
});

gulp.task('default', ['img', 'jshint', 'sass', 'watchify', 'watch']);