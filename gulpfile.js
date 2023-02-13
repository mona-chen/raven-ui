const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss')

function build(){
    return src('src/extend/**/*.scss')
    .pipe(sass())
    // .pipe(purgecss({content: ['./build/*.html']}))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./src/css'))
}

async function  watcher(){
    watch(['src/extend/**/*.scss', 'build/*.html', 'src/core/**/*.scss'], build)
    // console.log('Watcher is actively listening for changes in your css files')
}


exports.default = series(build, watcher)

exports.default = series(init,build, watcher)