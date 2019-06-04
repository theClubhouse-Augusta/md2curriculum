# md2fs
Markdown to File Structure is a tool that converts a single markdown file into separate files and folders.


## Markdown Rules
Headers are defined by a single `#`
``` Markdown
# Week 1
```
These will be the folder names in your output folder. The content for these will be placed into `readme.md`.

There are 2 types of activities defined
`## Resources` and `## Exercises`
These will be sent to separate files named `resource.md` and `exercises.md` respectively.

At the end of each activity put `---` to signal the end of that activity.

Example:
``` Markdown
# Week 1
- Content

## Exercise
1. Do a thing
2. And another thing

---
```


## Installation
- `npm install md2fs`

## Usage

``` Javascript
const md2fs = require('md2fs');

md2fs("path/to/fileName");
```
## Goals
```


## How to Contribute
Thank you for considering contributing to this project. 
To get up and running your going to need to do a few basic things first.

#### Basic Steps
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run `npm install` to install local dependencies
4. Add your changes
5. Refer to the **Testing** section on how to test your changes as you develop
6. Run `npm run build` to run babel and prettier on your code. This way we don't have to have a conversation about code formatting.
7. Commit your changes (`git commit -am "Add some feature"`)
8. Push to the branch (`git push origin my-new-feature`)
9. Create new Pull Request


#### Testing
- This project uses new ECMA Script features. You will need to run [Babel](https://babeljs.io/) to propagate your changes in `src` to the `lib` folder. 
- To test your changes use `npm run dev`. This command by default loads the test file in the root of the directory. This file is named `test.md`. You can change your test file by going into your `package.json` and changing where the config is pointing. 
- *note: please remember not commit your custom test change to `package.json` as it would break tests for others.*
