"use strict";
/* Currently support
 * ex: node index.js test.js
 * File to parse must be in same dir as index.js
 */

/* Goals

Options
    --file-in/-fi <path/to/file>
        Defines the file to be processed. If left unspecified defaults to the test file in the repo.
    --folder-out/-fo <path/to/folder>
        Defines the top level output folder. If left unspecified defaults to a folder named output.
    --activities/-a <[list of activities]>
        Defines the different activity types

   ex. md2fs ./readme.md ./dist
*/

// let args =[];
// args.push("Outside the lib");
// args.push(argument);
// args.push(__dirname);
// args.push(__filename);
// args.push(process.cwd()+ "/" +process.argv[2]);

var App = require("./lib/app.js");

module.exports = function md2fs(args) {
  // Pass user input to App
  App(args);
};
