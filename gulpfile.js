var gulp = require('gulp');

gulp.task('build', function(){
  gulp.src('./src/**/*.{css,less,png}', {base: './src'})
  .pipe(gulp.dest('./lib'));
});
