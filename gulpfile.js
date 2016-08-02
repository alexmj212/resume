var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('bower', function(){
    gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./stylesheets/'));
    gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('./fonts/'));
});

gulp.task('less', function() {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('watch:html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch:js', function () {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch:less', ['less'], function () {
    gulp.src('./less/*.less')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['watch:html']);
    gulp.watch(['./js/*.js'], ['watch:js']);
    gulp.watch(['./less/*.less'], ['watch:less']);
});

gulp.task('default', ['less', 'connect', 'watch']);

gulp.task('build', ['bower', 'less']);