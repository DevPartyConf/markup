var gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib');

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 1337
    })
});

gulp.task('jade', function () {
    gulp.src('jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
});

gulp.task('stylus', function () {
    gulp.src('stylus/main.styl')
        .pipe(stylus({
            use: nib(),
            compress: true
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('stylus/*.styl', ['stylus']);
    gulp.watch('jade/*.jade', ['jade']);
});

gulp.task('copy', function () {
    gulp.src('assets/img/**/*')
        .pipe(gulp.dest('dist/img'));

    gulp.src('assets/js/*.js')
        .pipe(gulp.dest('dist/js'));

    gulp.src('assets/css/*.css')
        .pipe(gulp.dest('dist/css'));

    gulp.src('assets/favicon/favicon.ico')
        .pipe(gulp.dest('dist'));

    gulp.src('assets/robots.txt')
        .pipe(gulp.dest('dist'));

    gulp.src('assets/sitemap.xml')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['connect', 'copy', 'jade', 'stylus', 'watch']);