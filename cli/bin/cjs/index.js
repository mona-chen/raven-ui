#!/usr/bin/env node
"use strict";
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const chalk = require('chalk');
const boxen = require('boxen');
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
    const coreImport = `@import "../../raven-ui/core/"`;
    const ravenrcPath = path.resolve(__dirname, '../../src/.ravenrc');
    const extendPath = path.resolve(__dirname, '../../src/extend/index.scss');
    try {
        console.log(boxen(message, boxenOptions));
        fs.writeFileSync(ravenrcPath, JSON.stringify(ravenrc, null, 2));
        console.log(chalk.green(`🦉 Created .ravenrc file at ${ravenrcPath}`));
        fs.writeFileSync(extendPath, `${coreImport}\n\n/* write ur custom CSS code after this line*/`);
        console.log(chalk.yellow(`🦉 Created custom css (extend) folder at ${extendPath}`));
    }
    catch (err) {
        console.error(chalk.red(`Error creating .ravenrc file: ${err.message}`));
    }
}
if (argv._[0] === 'init') {
    createRavenrc();
}
