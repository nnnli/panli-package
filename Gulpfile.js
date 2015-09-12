/**
 * Created by Administrator on 2015/9/11.
 */
// ���� gulp
var gulp = require('gulp');

// �������
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// ���ű�
//gulp.task('lint', function() {
//    gulp.src('./js/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


// ����Sass
gulp.task('sass', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

// �ϲ���ѹ���ļ�
gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('panli.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('panli.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// Ĭ������
gulp.task('default', function(){
    gulp.run( 'sass', 'js','browser-sync');

    // �����ļ��仯
    gulp.watch('*', function(){
        gulp.run( 'sass', 'js','browser-sync');
    });
});