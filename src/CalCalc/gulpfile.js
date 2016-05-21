/// <binding BeforeBuild='libs, css' Clean='cleanCss, cleanLib' />
var gulp = require('gulp');
var rimraf = require('rimraf');

var paths = {
    npm: './node_modules/',
    lib: './wwwroot/lib/',
    css: './wwwroot/css/',
    libNg2InMem: './wwwroot/lib/angular2-in-memory-web-api',
    libNg2: './wwwroot/lib/@angular',
    rxjs: './wwwroot/lib/rxjs'
}

var cssNode = [
    paths.npm + 'bootstrap/dist/css/bootstrap.min.css',
    paths.npm + 'font-awesome/css/font-awesome.min.css'
]

var libs = [
    paths.npm + 'es6-shim/es6-shim.min.js',
    paths.npm + 'zone.js/dist/zone.js',
    paths.npm + 'reflect-metadata/reflect.js',
    paths.npm + 'systemjs/dist/system.src.js',
        
    //paths.npm + 'angular2/bundles/http.dev.js',
    //paths.npm + 'angular2/bundles/router.dev.js',

    paths.npm + 'bootstrap/dist/js/bootstrap.min.js',
    paths.npm + 'jquery/dist/jquery.min.js'
]

var libsRxjs = [
    paths.npm + 'rxjs/**/*'
]

var libsNg2InMem = [
    paths.npm + 'angular2-in-memory-web-api/**/*'    
]

var libsNg2 = [    
    paths.npm + '@angular/**/*'
]

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('libsRxjs', function () {
    return gulp.src(libsRxjs).pipe(gulp.dest(paths.rxjs));
});

gulp.task('libsNg2InMem', function () {
    return gulp.src(libsNg2InMem).pipe(gulp.dest(paths.libNg2InMem));
});

gulp.task('libsNg2', function () {
    return gulp.src(libsNg2).pipe(gulp.dest(paths.libNg2));
});

gulp.task('css', function () {
    return gulp.src(cssNode).pipe(gulp.dest(paths.css));
});

gulp.task('cleanLib', function (callback) {
    rimraf(paths.lib, callback);
})

gulp.task('cleanCss', function (callback) {
    rimraf(paths.css, callback);
})