var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function (cb) {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
  cb();
})


gulp.task('default', ['start'])
