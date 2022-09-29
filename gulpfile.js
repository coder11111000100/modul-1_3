const {
    src,
    dest,
    parallel,
    task,
    series} = require('gulp');

// Load plugins
const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');

// CSS
function css() {
const source = './app/style.css';
return src(source)
    .pipe(changed(source))
    .pipe(cssnano())
    .pipe(dest('./dist/'))
}

// Optimize images
function img() {
return src('./app/images/*')
    .pipe(dest('./dist/images'));
}

// html
function html() {
return src('./app/*.html')
    .pipe(dest('./dist/'))
}

const dev = series( parallel(html, css, img));
 task('default', dev )