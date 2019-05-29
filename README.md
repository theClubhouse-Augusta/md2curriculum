# md2fs
Markdown to File Structure is a command line tool that converts a single markdown file into separate files and folders based on cli arguments. This tool is made to help coding boot camp instructors develop curriculum using Markdown files on Github and be able to release those files in a managed way.


## Installation
- `npm install md2fs`

## Usage

*note: File to parse must be in same dir as index.js*

With Javascript:
``` Javascript
const md2fs = require('md2fs');

md2fs(fileName);
```

From the Command Line:
`node index.js test.md`

## Goals
```
Options
    --file-in/-fi <path/to/file>
        Defines the file to be processed. If left unspecified defaults to the test file in the repo.
    --folder-out/-fo <path/to/folder>
        Defines the top level output folder. If left unspecified defaults to a folder named output.
    --activities/-a <[list of activities]>
        Defines the different activity types

   ex. md2fs ./readme.md ./dist
```

## How to Contribute
Thank you for considering contributing to this project. 
To get up and running your going to need to do a few basic things first.

#### Basic Steps
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run `npm install` to install local dependencies
4. Add your changes to `./index.js` and in the `src` folder
5. Refer to the **Testing** section on how to test your changes as you develop
6. Run `npm run build` to run babel and prettier on your code. This way we don't have to have a conversation about code formatting.
7. Commit your changes (`git commit -am "Add some feature"`)
8. Push to the branch (`git push origin my-new-feature`)
9. Create new Pull Request


#### Testing
- This project uses new ECMA Script features. You will need to run [Babel](https://babeljs.io/) to propagate your changes in `src` to the `lib` folder. 
- To test your changes use `npm run dev`. This command by default loads the test file in the root of the directory. This file is named `test.md`. You can change your test file by going into your `package.json` and changing where the config is pointing. 
- *note: please remember not commit your custom test change to `package.json` as it would break tests for others.*
