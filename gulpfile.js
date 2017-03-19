var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync');
var reload = browserSync.reload;
var clean=require('gulp-clean');
gulp.task('nitin',function(){
  return gulp.src('src/scss/app.scss').pipe(gulp.dest('app/css'));
  });
var APPPATH={
  root:'app/',
  roothtml:'src/*.html'
}

gulp.task('clean',function()
{
  gulp.src(APPPATH.root+'/*.html',{read:false,force:true})
  .pipe(clean())
});

gulp.task('copy',['clean'],function()
{
  gulp.src(APPPATH.roothtml)
  .pipe(gulp.dest(APPPATH.root))
});

gulp.task('watch',['copy'],function()
{
  gulp.watch([APPPATH.roothtml],['copy'])
});

gulp.task('serve',['watch'],function()
{
  browserSync.init([APPPATH.root + 'css/'+'/*.css',APPPATH.root + '/*.html'],
  {
    server:{
      baseDir:APPPATH.root
    }
  })
});
