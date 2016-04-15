var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

gulp.watch('src/sass/*.scss', ['styles'], function(event) {
  console.log(event.path + ' was ' + event.type);
});