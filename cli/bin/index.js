#!/usr/bin/env node

const yargs = require('yargs');
const exec = require('child_process').exec;


// Define the command and its options
yargs.command({
  command: 'generate',
  describe: 'Generate the CSS code based on the options provided',
  builder: {
    size: {
      describe: 'Size of the elements',
      demandOption: true,
      type: 'string',
    },
    theme: {
      describe: 'Color theme to use',
      demandOption: false,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log(`Size: ${argv.size}`);
    console.log(`Theme: ${argv.theme}`);

    // Generate the CSS code here
  },
});

yargs
.command("init", "Initialize the Raven UI project", () => {}, (argv) => {
    exec(`cd raven-ui && gulp`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  })
//   .help().argv;
  

yargs.parse();
