#!/usr/bin/env node
"use strict";
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const chalk = require('chalk');
const boxen = require('boxen');
var exec = require('child_process').exec;
const { spawnSync, spawn } = require('child_process');
const version = require('../package.json').version;
const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
};
const message = chalk.white.bold(`Raven CLI @ Version ${version}`);
const argv = yargs
    .usage('Usage: $0 <command> [options]')
    .command('init', 'Initialize Raven CSS in your project', {
    'path': {
        alias: 'p',
        describe: 'Specify the location of the .ravenrc file',
        default: '.',
        type: 'string',
    },
    'extend': {
        alias: 'e',
        describe: 'Specify the path to your custom styles',
        default: '.',
        type: 'string',
    }
})
    .help()
    .argv;
function createRavenrc() {
    const ravenrc = {
        cache: ['html', 'body'],
        css_path: '../src/styles',
        watch_dir: '../src',
        purge: true,
        custom_path: 'extend',
    };
    // Get the absolute path of the current directory
    const currentPath = path.resolve('./');
    // Get the absolute path of the parent directory
    const parentPath = path.resolve('../');
    const coreImport = `@import "../../raven-ui/core/"`;
    // define paths 
    let ravenrcPath;
    let extendPath;
    const parentDir = path.resolve(process.cwd(), '..');
    // console.log(parentDir)
    if (currentPath === parentPath) {
        extendPath = path.join(parentDir, '/src/extend/index.scss');
        ravenrcPath = path.join(parentDir, '/src/.ravenrc');
    }
    else {
        extendPath = path.join(process.cwd(), '/src/extend/index.scss');
        ravenrcPath = path.join(process.cwd(), '/src/.ravenrc');
        console.log(extendPath);
    }
    // console.log(path.join(process.cwd(), '.ravenrc'))
    try {
        console.log(boxen(message, boxenOptions));
        // Check if gulp-cli is installed globally
        const gulpCliCheck = spawnSync('npm', ['list', '-g', 'gulp-cli']);
        if (gulpCliCheck.status !== 0) {
            // Install gulp-cli globally
            console.log('gulp-cli is not installed globally. Installing now...');
            const gulpCliInstall = spawnSync('npm', ['install', '-g', 'gulp-cli']);
            if (gulpCliInstall.status === 0) {
                console.log('gulp-cli has been installed globally.');
            }
            else {
                console.error('Failed to install gulp-cli globally. Please install it manually.');
            }
        }
        fs.writeFileSync(ravenrcPath, JSON.stringify(ravenrc, null, 2));
        console.log(chalk.green(`🦉 Created .ravenrc file at ${ravenrcPath}`));
        fs.writeFileSync(extendPath, `${coreImport}\n\n/* write ur custom CSS code after this line*/`);
        console.log(chalk.yellow(`🦉 Created custom css (extend) folder at ${extendPath}`));
    }
    catch (err) {
        console.error(chalk.red(`Error creating .ravenrc file: ${err.message}`));
    }
}
function watch() {
    console.log(boxen(message, boxenOptions));
    const gulpWatch = spawn('gulp', [], { cwd: '../raven-ui' });
    gulpWatch.stdout.on('data', (data) => {
        console.log(`${chalk.green('raven_logs:')}  ${chalk.blue(data)}`);
    });
    gulpWatch.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    gulpWatch.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
    process.on('SIGINT', function () {
        console.log(chalk.yellow(`\nRaven watch Terminated`));
        gulpWatch.kill('SIGINT');
        process.exit(0);
    });
    // exec('cd ../raven-ui && gulp', { shell: '/bin/sh' }, function (error: any, stdout:any, stderr: any) {
    //   console.log('stdout: ' + stdout);
    //   console.log('stderr: ' + stderr);
    //   if (error !== null) {
    //     console.log('exec error: ' + error);
    //   }
    // });
}
if (argv._[0] === 'init') {
    createRavenrc();
}
if (argv._[0] === 'watch') {
    watch();
}
