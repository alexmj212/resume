var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
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

gulp.task('watch:css', function () {
    gulp.src('./stylesheets/*.css')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['watch:html']);
    gulp.watch(['./js/*.js'], ['watch:js']);
    gulp.watch(['./stylesheets/*.css'], ['watch:css']);
});

gulp.task('default', ['connect', 'watch']);