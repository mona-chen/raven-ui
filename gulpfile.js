const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');


function build(){
    return src('core/**/*.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('css'))
}

async function  watcher(){
    watch(['core/**/*.scss'], build)
    // console.log('Watcher is actively listening for changes in your css files')
}


exports.default = series(build, watcher)