var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync');
var reload = browserSync.reload;
gulp.task('nitin',function(){
  return gulp.src('src/scss/app.scss').pipe(gulp.dest('app/css/app.css'));
  });
var APPPATH={
  root:'app/'
}

gulp.task('serve',function()
{
  browserSync.init([APPPATH.root + '/*.html'],
  {
    server:{
      baseDir:APPPATH.root
    }
  })
});
