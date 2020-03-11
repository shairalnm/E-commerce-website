'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');;
var rename = require('gulp-rename');
var changed = require('gulp-changed');

/////////
//SCSS/CSS
/////////
 
var SCSS_SRC = './src/Assets/scss/**/*.scss';
 var SCSS_DEST = './src/Assets/*.css';

//compile SCSS
gulp.task('compile_scss',function(){

     return gulp.src(SCSS_SRC)
      .pipe(sass())
      .on('error',sass.logError)
      .pipe(minifyCSS())
      .pipe(rename({ suffix: '.min'}))
      .pipe(changed(SCSS_DEST))
      .pipe(gulp.dest(SCSS_DEST));

});

//detect changes in SCSS
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC,['compile_scss']);
});

//Run tasks 
gulp.task('default',['watch_scss']); 

 
/* 
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => { */
//      return gulp.src('sass/**/*.scss')
        /*   .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
  return del([
    'css/main.css',
  ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));  */ 