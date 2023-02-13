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

// const gulp = require('gulp');
// const inlinesource = require('gulp-inline-source');
// const replace = require('gulp-replace');

// gulp.task('default', () => {
//   return gulp
//     .src('./build/*.html')
//     .pipe(replace('.js"></script>', '.js" inline></script>'))
//     .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
//     .pipe(
//       inlinesource({
//         compress: false,
//         ignore: ['png'],
//       })
//     )
//     .pipe(gulp.dest('./build'));
// });