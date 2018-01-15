
const spawn = require('cross-spawn');
const newFolder = process.argv[2];
const chalk = require("chalk");
const ncp = require("ncp").ncp;
const path = require("path");
ncp.limit = 0;

const start = () => {
    console.log(chalk.green('Everything OK!'));
    console.log(chalk.green.inverse('Starting', newFolder));    
    spawn('npm', ['--prefix', newFolder, 'start' ], { stdio: 'inherit' });
}

const install = () => {
    console.log(chalk.green.inverse('Installing modules to', newFolder));    
    spawn('npm', ['--prefix', newFolder, 'install' ], { stdio: 'inherit' });
    // start();
}

const makeThings = () => {
    if (!newFolder) {
        console.log(chalk.red.inverse('Hey!'));
        console.log(chalk.red('I need a name... How about "react-npm my-fancy-name?"'));
        return null;
    } else {
        ncp(path.join(__dirname, "template"), path.join("./", newFolder), function (err) {
            if (err) {
                return console.error(chalk.red.inverse(err));
            }
            console.log(chalk.green.inverse("Done!"));
            console.log(chalk.green(newFolder, "Created"));
            console.log(chalk.green("Have FUN"));
            install();
        });
    }
}

makeThings();