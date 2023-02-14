const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss')
const fs = require('fs');
let config = require('rc')('raven', {
  custom_path: 'extend',
  css_path: 'css'
})
console.log(config);

const {css_path, custom_path} = config;

const srcPath = 'extend';
const destPath = '../src';
const symlinkPath = '.parent';


async function init () {
    if (!fs.existsSync(symlinkPath)) {
        await fs.symlink('../src', symlinkPath, 'dir', (err) => {
          if (err) throw err;
        });
      }
}
function build(){
    return src(`${custom_path}/**/*.scss`)
    .pipe(sass())
    // .pipe(purgecss({
    //     content: [
    //       '.parent/**/*.jsx',
    //       '.parent/**/*.tsx',
    //       '.parent/**/*.ts',
    //       '.parent/**/*.js',
    //       '.monarc'
    //     ]
    //   }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(css_path))
}

async function  watcher(){
    watch([`${custom_path}/**/*.scss`, `${destPath}/**/*.js`, '.ravenrc', `${destPath}/**/*.jsx`, `${destPath}/**/*.ts`, `${destPath}/**/*.tsx`, `${destPath}/**/*.html`, `${custom_path}/**/*.js`, '*.js', 'core/**/*.scss'], build)
    // console.log('Watcher is actively listening for changes in your css files')
}

exports.default = series(init,build, watcher)