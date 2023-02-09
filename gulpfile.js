const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss')

function build(){
    return src('extend/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({content: ['*.html']}))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('css'))
}

async function  watcher(){
    watch(['extend/**/*.scss', '*.html', 'core/**/*.scss'], build)
    // console.log('Watcher is actively listening for changes in your css files')
}


exports.default = series(build, watcher)