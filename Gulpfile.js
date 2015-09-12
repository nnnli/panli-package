/**
 * Created by Administrator on 2015/9/11.
 */
// ���� gulp
var gulp = require('gulp');
var react = require('gulp-react');

// �������
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

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

//react ����

gulp.task('react', function () {
    return gulp.src('./src/jsx/register.jsx')
        .pipe(browserify({
            transform:'reactify',
        }))
        .pipe(gulp.dest('./dist/js'));
});


//����Sass��Autoprefix����С��
gulp.task('styles', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// ����Sass
gulp.task('sass', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('panli.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
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
    //gulp.run( 'sass', 'js','browser-sync');
    gulp.run( 'styles', 'scripts');
    var server = livereload();
   /* // �����ļ��仯
    gulp.watch('./src/!**!/!*.*', function(file){
        //gulp.run( 'sass', 'js','browser-sync');
        gulp.run( 'styles', 'scripts');

    });*/
});

/* ���� */

gulp.task('watch', function() {

    // ��������.scss��
    gulp.watch('src/scss/*.scss', ['styles']);

    // ��������.js��
    gulp.watch('src/js/*.js', ['scripts']);



});