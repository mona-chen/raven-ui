const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss')
const fs = require('fs');
const rename = require('gulp-rename');
const header = require('gulp-header');
let config = require('rc')('raven', {
  custom_path: '../src/extend',
  css_path: '../src/styles'
})
console.log(config);

const {css_path, custom_path, purge} = config;

const destPath = '../src';
const symlinkPath = '.parent';
const configPath = '.ravenrc'



// check if ravenrc file was modified
fs.watch(".ravenrc", (eventType, filename) => {
  console.log("<==== A change was detected in ", filename, " kindly restart your gulp process to reflect change ====>");
 
  // We can look for different types of changes on a file
  // using the event type like: rename, change, etc.
});


async function init () {
    if (!fs.existsSync(symlinkPath)) {
        await fs.symlink('../src', symlinkPath, 'dir', (err) => {
          if (err) throw err;
        });
      }

      if (!fs.existsSync(configPath)) {
        await fs.symlink('../src/.ravenrc', configPath, 'dir', (err) => {
          if (err) throw err;
        });
      }
}
function build(){
    if(purge){
      return src(`${custom_path}/**/*.scss`)
      .pipe(sass())
      .pipe(purgecss({
          content:  [
            '.parent/**/*.jsx',
            '.parent/**/*.tsx',
            '.parent/**/*.ts',
            '.parent/**/*.js',
            '.monarc'
          ] 
        }))
      .pipe(postcss([autoprefixer()]))
      // .pipe(header(`@import "${__dirname}/raven.js";\n`)) // include raven.js at the top of the output file
      // .pipe(rename({ suffix: '.min' }))   
      .pipe(dest(css_path))
      // .pipe(kss(kssConfig))
    } else {
      return src(`${custom_path}/**/*.scss`)
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      // .pipe(header(`@import "${__dirname}/raven.js";\n`)) // include raven.js at the top of the output file
      // .pipe(rename({ suffix: '.min' })) 
      .pipe(dest(css_path))
      // .pipe(kss(kssConfig))
    }
}

async function  watcher(){
    watch([`${custom_path}/**/*.scss`, `${destPath}/**/*.js`, '.ravenrc', `${destPath}/**/*.jsx`, `${destPath}/**/*.ts`, `${destPath}/**/*.tsx`, `${destPath}/**/*.html`, `${custom_path}/**/*.js`, '*.js', 'core/**/*.scss'], build)
    // console.log('Watcher is actively listening for changes in your css files')
}



exports.default = series(init,build, watcher)