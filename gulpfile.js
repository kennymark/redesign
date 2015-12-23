// Gulp
var gulp = require('gulp');

// Gulp plugins
var plumber  = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require("browser-sync").create();
var concat = require('gulp-concat');
// Static Server + watching scss/html files

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
   
});


 gulp.task('sass', function () {
    gulp.src('./sass/**/*.sass')
   .pipe(plumber())
   .pipe(sass({outputStyle: 'compressed'}))
   .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    // content
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./js/*.js', ['uglify']);
    gulp.watch('./*html', browserSync.reload);
});

gulp.task('uglify',['watch'], function() {
    // content
       gulp.src('./js/*.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream());

});
gulp.task('concat', function() {
    // content
    return gulp.src('./css/*.css')
    .pipe(plumber())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('./dist/css'));  
});
gulp.task('default', ['watch','sass','uglify','serve','concat']);