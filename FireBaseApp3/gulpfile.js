var gulp = require('gulp');

gulp.task('build', function(){
  gulp.src('./src/**/*.{css,less,png}', {base: './src'})
  .pipe(gulp.dest('./firebaseHosting/public'));
  gulp.src('./src/**/index.html', {base: './src'})
  .pipe(gulp.dest('./firebaseHosting/public'));
});
