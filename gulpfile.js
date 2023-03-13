// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }
//
// exports.default = defaultTask


var gulp  = require('gulp'),
    // sass = require('gulp-sass'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

function buildCss() {
    return gulp.src(['scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(postcss([ autoprefixer(
            // { browsers: [
            //     'Chrome >= 35',
            //     'Firefox >= 38',
            //     'Edge >= 12',
            //     'Explorer >= 10',
            //     'iOS >= 8',
            //     'Safari >= 8',
            //     'Android 2.3',
            //     'Android >= 4',
            //     'Opera >= 12']
            // }
        // )]))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'))
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'))
}

function watcher() {
    gulp.watch('scss/**/*.scss', { events: 'all' }, gulp.series(buildCss));
}

exports.watch = gulp.series(buildCss, watcher);
exports.default = gulp.series(buildCss);
