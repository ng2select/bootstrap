var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

var path = {
  less: {
    src: './src/styles/**/*.less',
    dest: './src/styles'
  }
}

gulp.task('default', $.taskListing);

gulp.task('less', function () {
  return gulp
      .src(path.less.src)
      .pipe($.less({
        paths: []
      }))
      .pipe(gulp.dest(path.less.dest));
});

gulp.task('watch-less', function () {
  gulp.watch([path.less.src], ['less']);
});
