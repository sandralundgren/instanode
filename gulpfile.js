var gulp    = require('gulp');
var sass    = require('gulp-sass');
var uglify  = require('gulp-uglify');
var plumber = require('gulp-plumber');
var cssmin  = require('gulp-cssmin');
var concat  = require('gulp-concat');
var nodemon = require('gulp-nodemon');


gulp.task('start', function (cb) {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
  cb();
})

gulp.task('sass', function () {
  gulp.src('public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('public/dist'));
});

gulp.task('js', function () {
  gulp.src('public/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', function () {
  gulp.watch('public/scss/*.scss', ['sass']);
  gulp.watch('public/js/*.js', ['js'])
});


gulp.task('default', ['start', 'sass', 'js', 'watch'])
