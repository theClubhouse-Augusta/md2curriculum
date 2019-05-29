'use strict'

/* Determine npm command to run
*   As a dev:
*   ex. md2fs dev ./readme.md dist
*   
*   dev || build
*   dev just runs babel
*   build runs babel and prettier
*   default dev 
*
* Parse --file-in/-fi 
* Parse --folder-out/-fo 
*/

var App = require('./lib/app.js');

md2fs(process.argv[1], process.argv.slice(2))

module.exports = md2fs;

function md2fs (cwd, args) {

    args.forEach(function (arg, index) {
        if(index === 0) {
            App(arg);
        }

    });

}
