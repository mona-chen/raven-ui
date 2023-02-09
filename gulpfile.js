const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('core/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

async function  watcher(){
    watch(['core/**/*.scss'], buildStyles)
    // console.log('Watcher is actively listening for changes in your css files')
}


exports.default = series(buildStyles, watcher)