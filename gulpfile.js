var gulp    = require('gulp');
var sass    = require('gulp-sass');
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
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('public/scss/*.scss', ['sass']);
});


gulp.task('default', ['start', 'sass'])
