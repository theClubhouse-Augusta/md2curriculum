# Table of Contents
- [Week 1](#Week-1)
- [Week 2](#Week-2)
- [Week 3](#Week-3)
- [Week 4](#Week-4)
- [Week 5](#Week-5)
- [Week 6](#Week-6)
- [Week 7](#Week-7)
- [Week 8](#Week-8)
- [Week 9](#Week-9)
- [Week 10](#Week-10)
- [Week 11](#Week-11)
- [Week 12](#Week-12)


# Week 1

#### Communication Accts
- Slack
    - channels
    - direct messages
    - edit/delete messages
- professional Email Address

#### fs basics
- intro folders
    - Drive folders
    - User folder
    - Important Sub Folders (Desktop, Documents, Downloads)

#### CLI Basics
- CRUD file system (fs)
    - what does CRUD stand for
- navigate fs
- CRUD fs
    - i.e. `cd, dir, mkdir, nano, ls, touch, echo, cat`

#### Editor (VS Code)
- fs manipulation with VS Code
- Folder/file naming conventions
- VS Code Specifics
    - Command Palette
    - Keyboard Shortcuts cheat sheet

## Resources
- [Learn enough command line to be dangerous](https://www.learnenough.com/command-line-tutorial/basics#sec-our_first_command)
- [Explain Shell](https://explainshell.com/)

## Exercise
*Complete using CLI*
1. Make a directory on your Desktop folder and name it something like `cbc-6`.
2. Navigate in that folder and create another folder and name it something like first web project.
2. In that folder create a file called something like `hey-there.txt`
3. Open that file and add some text

---

#### Git Basics
- setup Github acct
- diff b/w GitHub & git
- basic Git workflows
    - `clone -> add -> commit -> push/pull`
    - `status`

## Resources
- [Basic Git Workflow Tutorial](http://rogerdudler.github.io/git-guide/)
- [Basic Git cheat sheet](http://rogerdudler.github.io/git-guide/)

---
## Exercise
1. Create a new repository on Github.
2. CLI: navigate to the folder **inside** your `cbc-6` folder.
3. CLI: `git add .`
4. CLI: `git commit -m "[...]"`
    - Write a message in the `[...]`
5. Copy from Github the line that says `git remote add [...]`
6. CLI: Paste what you copied and press enter
7. CLI: `git push -u origin master`
8. Refresh Github to see if it worked.

#### Markdown Basics
- importance for jobs
- headings `# - ######`
- bold
- italics
- links/images
- lists (ordered/unorder)
- task lists
- code blocks
- emojis
- table

## Resources
- [Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/)

---

## Exercise
1. Add a `readme.md` file to your project
2. Use 6 of the above concepts to explain your text file.
---
#### HTML Basic Terms
- elements
- tags
- attributes
- HTML document structure
    - `html head body`
- self closing elements

#### CSS Basic Terms
- selectors
- properties
- values
- type selectors
- class selectors
- id selectors
- additional selectors
    - psuedo-selectors
    - children

#### CSS Basic Concepts
- Referencing CSS
- CSS Resets
- Cross Browser Compatibility

#### HTML Basic Concepts
- block vs. inline (div vs span)
- comments
- headings
- bold/italics
- HTML5
    - `header, nav, article, section, footer, aside`

## Resources
- [First Web Page](https://learn.shayhowe.com/html-css/building-your-first-web-page/)
- [HTML/CSS Basics](https://learn.shayhowe.com/html-css/getting-to-know-html/)
--- 

## Exercise
1. Make a web page.
2. Add html, head, and body tags
3. In the body add a header, article, section, footer
4. In each of those add some divs, paragraphs, and spans of text.
5. Apply classes and ids to html elements.

---
#### HTML Basic Concepts II
- creating hyper links
    - relative vs absolute path
    - wrapping elements with anchors
    - link to new window
    - link to part of same page
- mailto
    - special character encoding
    - URL encoding

#### CSS Basic Concepts II
- Calculating Specificity
- combing Selectors
- Layering styles with multiple classes

#### CSS Colors
- rgb
- hsl
- keyword
- hexadecimal
- rgba
- hsla

#### CSS Lengths
- Absolute Lengths
    - pixels
- Relative Lengths
    - percentages
    - em/rem 

#### CSS Box Model
- display
    - block
    - inline
    - inline-block
    - none
- width/height
- margin
- padding
- borders
    - border-width
    - border-style
    - border-color
    - border-radius
    - _box-sizing_
        - vendor prefixing
            - -moz- : Firefox
            - -ms- : IE
            - -webkit- : Chrome/Safari

## Resources
- [Hyperlink Basics](https://learn.shayhowe.com/html-css/getting-to-know-html/)
- [CSS Basics](https://learn.shayhowe.com/html-css/getting-to-know-css/)
- [CSS Box Model](https://learn.shayhowe.com/html-css/opening-the-box-model/)
---
## Exercise
1. add an anchor tag that links to your favorite website.
2. wrap a div of text that links to your text document you created.
3. use an anchor to link to an id somewhere else on the page.
4. put a style tag in the head of your html and color an element using rgb, hex color, and a key word.
5. set the height/width, padding, border, and margin for some of your elements.
6. for an element that has a child:
    - put a px width/height on the parent.
    - on the child put a percentage width/height
---
#### HTML/CSS Developer Tools Basics
- how to open
- elements tab
    - html
    - styles
    - box-model

#### CSS Positioning
- floats
- clearing
- containing
    - `:before` and `after`
- inline-block
- relative
- absolute
- fixed

## Resources
- [Developer Tool Basics](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [CSS Positioning](https://learn.shayhowe.com/html-css/positioning-content/)
---
## Exercise
1. add an html `aside` element and put it above your `section`
2. float the `aside` to the side of the section
3. use `inline-block` to make a 2 column layout (2 elements side by side)
---
#### CSS Typography
- typeface vs. font
- color
- font properties
    - font-family
    - font-size
    - font-style
    - font-variant
    - font-weight
- line-height
- text properties
    - text-align
    - text-decoration
    - text-indent
    - text-shadow
    - text-transform
- web safe fonts
- web fonts
- citations & quotes

#### CSS backgrounds & gradients
- background-color
- background-image
    - background-repeat
    - background-position
- designing gradient backgrounds
    - linear background gradient
    - radial background gradient
- background-size
    - cover
    - contain

## Resources
- [Typography](https://learn.shayhowe.com/html-css/working-with-typography/)
- [Backgrounds and Gradients](https://learn.shayhowe.com/html-css/setting-backgrounds-and-gradients/)
---
## Exercise
1. set your paragraphs to be a web safe font.
2. load a font from Google that you like and set that for your anchor tags.
3. mess with font/text properties
4. set your divs to a certain background color.
5. load a background image to something
6. set a background-gradient to something
---
#### HTML lists
- unordered lists
- ordered lists
    - start
    - reversed
    - value
- description lists
- nesting lists
- list item styling
    - list-style-type

#### HTML/CSS adding media
- images
    - supported image formats (gif, jpg, png) 
    - background-image vs img tag   
- audio
- video
- inline frames
- figure
- caption

#### HTML form
- form tag
    - `method`
    - `action`
- input types
    - `text`      
    - `color`
    - `email`
    - `range`
    - `time`
    - `date`
    - `month`
    - `search`
    - `url`
    - `datetime`
    - `number`
    - `tel`
    - `week`
- textarea
- `name`
- multiple choice
    - type
        - `radio`
        - `checkbox`
- drop down list
    - `select > option`
- submit button
- hidden input
- form organization
    - label
        - `for`
    - fieldset
        - legend
- placeholder

#### HTML tables
- table tag
- table row
- table data
- table head
- table structure
    - caption tag
    - table head
    - table body
    - table footer
- combining multiple cells
    - `scope`
    - `colspan`
    - `rowspan`
- table borders
    - border-collapse
    - border-spacing
- aligning text
    - text-align
    - vertical-align

## Resources
- [Lists](https://learn.shayhowe.com/html-css/creating-lists/)
- [Media](https://learn.shayhowe.com/html-css/adding-media/)
- [Forms](https://learn.shayhowe.com/html-css/building-forms/)
- [Tables](https://learn.shayhowe.com/html-css/organizing-data-with-tables/)
---
## Exercise
1. add an unordered list of at least 3 items
2. add an ordered list of at least 3 items
3. create a table
4. nest the unordered list in a cell
5. nest the ordered list in another cell
6. give the table a heading and footer 
7. add an image tag
8. give it a caption
9. make a form with some different types of inputs
---
# Week 2

#### CSS Scaleability and Performance
- BEM
- performant selectors
- reusable code

#### CSS Positioning II
- overflow
- offset
    - `top right bottom left`
- z-index

#### CSS Complex Selectors
- direct/indirect descendent selectors
- sibling selectors
- attribute selectors
- pseudo classes

## Resources
- [BEM](http://getbem.com/)
- [Performance](https://learn.shayhowe.com/advanced-html-css/performance-organization/)
- [Detailed Positioning](https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/)
- [Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)
---
## Exercise
1. give an element a block level class name
2. in that element give it a BEM class name
3. add offset to a parent with a child
4. position that child absolute and give it some offset
5. make a grand child of step 3
6. using z-index put the child of step 3 on top of the grand child
---
#### CSS Responsive Web Design
- relative viewport lengths
- media queries
- mobile first
- viewport
- flexible media

#### CSS Transforms
- 2d transforms
- transform origin
- perspective
- 3d transforms
- transform style
- backface visibility

## Resources
- [Responsive Web Design](https://learn.shayhowe.com/advanced-html-css/responsive-web-design/)
- [CSS Transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/)
---
## Exercise
1. Use a media query to change the layout from 1 column on mobile to 2 columns on desktop
2. Set an image's height and width to use vw/vh
3. horizontally center an image in a parent
4. use hover to activate a transform
---
#### CSS Transitions & Animations
- transitions
- keyframes
- animation calls

#### HTML/CSS Polyfills
- HTML5 Shiv
- conditional linking
- Modernizr
- cross browser testing

#### HTML Semantics & Accessibility
- WAI-ARIA
- structural/text semantics
- microdata

## Resources
- [CSS Transitions/Animations](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)
- [Polyfills](https://learn.shayhowe.com/advanced-html-css/feature-support-polyfills/)
- [Accessibility](https://learn.shayhowe.com/advanced-html-css/semantics-accessibility/)
---
## Exercise
1. add the HTML5 Shiv to your project
2. add some Aria roles to some of your elements
3. transition a button's background-color when you hover
4. create an animation with at least 3 steps
---
#### *Bonus* CSS Flexbox
- history
- parent/child properties

#### *Bonus* CSS Grid
- history
- parent/child properties

## Resources
- [Flexbox](https://css-tricks.com/using-flexbox/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
---
# Week 3

#### JS Intro
- history
- in-browser vs on-server

#### JS Setup
- referencing (internal, external, `node`)
- use strict

#### JS Basics
- strings
- console log
- variable assignment
- integers
- undefined/null
- boolean

## References
- [reference JS](https://www.w3schools.com/TAGS/att_script_src.asp)
- [console log](https://www.w3schools.com/jsref/met_console_log.asp)
---
## Exercise
1. in the browser add 2 strings together and return the answer
2. create an html file 
    - internally, create a variable that stores a string 
        - add a string to your variable (`+`)
    - log the answer to the console
    - load it into the browser to check the answer
3. link to an external javascript file
    - create a variable that stores a string
    - create a variable that stores an integer
    - multiply those two variables together (`*`)
    - log the answer to the console
    - load the browser to check the answer
4. **bonus** in your external javascript file
    - add `2 + true` and see what you get
---
#### JS Operators
- arithmetic
- order of operations
- assignment
- comparison
- logical

#### JS Conditional Statements
- statements (`{};`)
- if/else if/else syntax

## Resources
- [operators](https://www.w3schools.com/js/js_operators.asp)
- [conditional](https://www.w3schools.com/js/js_if_else.asp)
---
## Exercise
* *note* from now on we are going to assume you are working on an external javascript file
1. create a counter variable with the value of 2
    - add 5 to it
    - then multiply that result by 2
    - log the output. Did you get 14?
    - modulo that answer by 3. Before you log the answer write a comment what you think it is going to return.
    - What happens when you modulo that answer by 2? Write in a comment if it returned what you expected?
2. create an `if` statement that tests if your variable modulus 2 returns 0
    - log in the console the answer
3. Create an `else` statement that logs that the variable was not even
4. create a conditional statement that tests the state of your variable in 4 different ways
    - in each of them link 2 comparisons together using logical operators
5. create 3 `if` statements back to back. Comment the difference between multiple `if` statements and 1 conditional statement.
---
#### JS Loops
- why loops
- while/do while/for loop syntax
- increment/decrement

## Resources
- [for loops](https://www.w3schools.com/js/js_loop_for.asp)
- [while loops](https://www.w3schools.com/js/js_loop_while.asp)
---
## Exercise
1. create a counter variable
2. add 1 and log it 50 times using a for loop
3. make a while loop that logs every other number up until 50
4. loop from 0 to 100
    - log the string `fizz` if the number is divisible by 3
    - log the string `buzz` if the number is divisible by 5
    - log the string `fizzbuzz` if the number is divisibly by both
---

#### JS Functions
- why functions
- definition vs. expression
- execution
- arguments
- `return`
- scope
- IIFE

## Resources
- [functions](https://www.w3schools.com/js/js_functions.asp)
---
## Exercise
1. create a function that takes two arguments and adds them together
2. create a function that takes two arguments and multiplies them together
3. create a function that takes two arguments where the first argument is the start number and the second argument is the end number. The body of the function starts a loop and ends it at the second argument and logs every number between the start and end number.
4. create a variable in the global scope
    - create a function that takes an argument
    - add the argument to the global variable
    - log the return of that function
5. create an IIFE that logs your success of creating an IIFE
---

#### JS User Input
- `prompt`
- `form`

#### JS Math Methods
- `floor`
- `ceil`
- `round`
- `random`
- `min`
- `max`
- `pow`

## Resources
- [math](https://www.w3schools.com/js/js_math.asp)
- [user input](https://stackoverflow.com/questions/22978243/get-userinput-in-javascript)
---
## Exercise
1. create a function that takes user input and compares it against a random number. If there is a match then log the success.
---
#### JS Characters
- escape
- character encoding

#### JS String Methods
- `length`
- `charAt`
- `toUpperCase`
- `toLowerCase`
- `indexOf`
    - square bracket accessor
- `startsWith || endsWith`
- `includes`
- `slice`

#### JS Array Basics
- construction
- accessing indexes
- `length`
- `push`
- `pop`
- array iteration

## Resources
- [characters](https://javascript.info/string)
- [string methods](https://www.w3schools.com/js/js_string_methods.asp)
- [arrays](https://www.w3schools.com/js/js_arrays.asp)
---

## Exercise
1. make an array of 10 grocery store items loop through that array and log each item.
2. loop through a string at least 10 characters long and log each character
3. make that string upper case
---

#### JS Arrays II
- `splice`
- `slice`
- `concat`
- `find`
- `sort`
- `reverse`
- `split`
- `join`
- `filter`
- `reduce`

## Resources
- [Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
---
## Exercise
- Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).
---
#### JS Data Types
- type checking
- type casting

## Resources
- [type conversion](https://www.w3schools.com/js/js_type_conversion.asp)
---
## Exercise
- Grocery Store app
    - functions:
        - add to inventory
        - subtract from inventory
        - Notify when out of stock
    - data:
        - inventory
        - inventory count
---
# Week 4

#### JS Polyfills
- ECMA/TC39
- ES versions
- babel

#### JS Testing With Mocha and Chai
- loading Mocha/Chai
- `describe`
- `it`
- `assert.equal`

#### JS Coding Style
- Egyptian style
- vertical indents
- nesting levels
- commenting strategies
- variable naming
- linting
    - *Bonus* ESLint
- .editorconfig

#### JS Object Basics
- name spacing
- literal syntax
- method definition
- value storage
- value accessing
- `for key in object`

#### JS this
- `new`
- `this`
- `bind`
- `call`
- `apply`

## Resources
- [type conversion](https://www.w3schools.com/js/js_type_conversion.asp)
- [objects](https://www.w3schools.com/js/js_object_definition.asp)
- [object properties](https://www.w3schools.com/js/js_object_properties.asp)
- [object methods](https://www.w3schools.com/js/js_object_methods.asp)
- [this keyword](https://www.w3schools.com/js/js_this.asp)
---
## Exercise
1. Test each function from last week's app
2. update variables and functions to better names
3. see if you can turn any functions into methods of objects
---
#### JS DOM Basics
- intro to concept of api
- selecting elements
- HTML collection vs node list
- node navigation

#### JS DOM Manipulation
- `style`
- `innerHTML` vs `textContent`
- `classList`

## Exercise
1. change styles of 3 separate elements using Javascript
2. change the class name and text of a a child or sibling of each of the above elements
---
#### JS DOM Events
- `addEventListener`
- event delegation

## Exercise
1. add an event listener to an element so that when you click it, another element's style changes.
2. create a list with at least 3 elements
3. apply event delegation to that list of elements
---
#### JS User Input
- input `onChange`
- form handling

#### JS Validation
- regex

## Exercise
- create an auto complete feature
    - input text box
    - list of terms
    - compare
    - validate input (no special characters)
---
#### JS Timing
- `setTimeout`
- `setInterval`
- `requestAnimationFrame`

## Exercise
- create a countdown timer
    - countdown from a number to 0
    - it needs to be visible counts
---
#### JS AJAX
- status codes
- GET
- XHR
- readyState
- response text

#### JS JSON
- syntax
- `parse`
- `stringify`

## Exercise
- hit the Faker API
    - build a profile card for a random person
---
#### Week 5

#### PHP Intro
- history
- server side/backend
- why

#### PHP Environment
- Vagrant

#### PHP Basics
- `<?php ?>`
- variables
- basic strings
- semi-colons
- `echo `
- `var_dump`
- comments

#### PHP Data Types
- string
- integer
- float
- boolean
- array
- object
    - `class`
    - `new`

#### PHP String Methods
- `strlen`
- `str_word_count`
- `strrev`
- `strpos`
- `str_replace`

#### PHP Operators
- arithmetic
- assignment
- comparison
- increment/decrement
- logical

#### PHP Conditional Statements
- `if elseif else`
- switch case

#### PHP Loops
- `while`
- `do...while`
- `for`
- `foreach`

#### PHP Arrays
- syntax
- accessing indexes
- `count`
- `sort`

#### PHP Functions
- definition
- execution
- argument list
- return

#### PHP Scope
- local
- global
- static

#### PHP Form Handling
- action
- method
- superglobals (server, request)
- GET vs POST
- handle empty request

#### PHP Form Validation
- html `required`
- `htmlspecialchars`
- `trim`
- `stripslashes`
- `preg_match`
- `filter_var`

#### PHP File Linking
- `include` vs `require`

# Week 6

#### PHP Exception Handling
- `try...catch`
- `throw`

#### PHP File Handling
- file upload
- `readfile`
- `fopen`
- `fread`
- `fclose`
- `feof`
- `fwrite`

#### PHP Cookies
- `setcookie`
- `$_COOKIE`

#### PHP Sessions
- `session_start`
- `session_unset`
- `$_SESSION`

#### MySQL Basics
- history/why
- different databases
- relational vs non-relational
- RDBM system

#### MYSQL PHPMyAdmin Basics
- create database
- create tables
- constraints
    - `NOT NULL`
    - `UNIQUE`
    - `PRIMARY KEY`
    - `AUTO INCREMENT`

#### PHP PDO Basics
- PDO vs MySQLi
- environment variables
- db connection

#### PHP PDO Read
- fetch vs fetch all
- fetch modes

#### PHP PDO Create
- sql insert
- sql injection
- prepared statement

#### PHP PDO Update/Delete
- `WHERE` clauses

#### PHP *Bonus* SQL
- transactions
- joins
- limiting functions
- aliases
- views

# Week 7

#### Server Basics
- Linux
- Apache
- World Wide Web

#### Server Cloud
- virtual machines
- TCP/IP
- SSH

#### Server Linux Basics
- Aptitude
- services
- systemctl
- network diagnostics

#### Server Basics II
- user/group permissions
- environment variables

#### Server SFTP
- public vs private SSH keys
- RSA encryption
- PuTTY

#### Server Deploy to Production
- connect Heroku to Github

#### Server *Bonus* Deploy to Production II
- Docker
- CI/CD
- Google Cloud/AWS/Azure

# Week 8

#### API Basics
- introduction
- REST

#### API JAM Stack
- introduction

#### CS Security
- code/data separation
- authentication
- cryptography
- password hashing
- config files
- error reporting

#### CS Design Patterns
- Constructor 
- Module
- Factory
- Singleton
- MVC

# Week 9

#### Career Basics
- technologies
- technical roles
- workflows
- testing
- iteration
- team-work
- conflict resolution

#### PM Agile Basics
- introduction
- Manifesto

#### PM Scrum
- Product Backlog
- Release Planning
- Sprint Planning Meeting
- Sprint Backlog
- Backlog tasks
- Daily Scrum
- Sprint Review
- Sprint Retrospective

#### PM Git
- Kanban
- Git Flow
- issues

#### JS Tooling
- npm scripts
- Pug
- SASS

# Week 10

#### CS Basics
- Big O
- Recursion
- Psuedo Code

#### CS Data Structures
- linked list
- doubly/circular linked list
- stack vs queue
- hash tables

#### CS Search Algos
- linear search
- binary search
- interpolation

#### CS Sorts
- selection
- bubble
- insertion

#### CS *Bonus* Algos
- merge/shell/quick sort
- bfs vs dfs
- trees

# Week 11

#### Design Basics
- history
- UI
- UX

#### Design Languages
- Material Design
- Flat Design
- Human Interface Guidelines

#### Design Resources
- Dribbble
- Awwwards
- Material
- Smashing Magazine

#### Design Principles
- Hick's Law

#### Design Patterns
- Interactive Design
- User Centered Design

#### Design System
- Component Library
- Style Guide

# Week 12

#### Job Web Presence
- Portfolio
- Linkedin
- Code Pen
- Blog
- Github

#### Job Search
- Indeed
- Google
- Monster

#### Job Application
- resume
- cover letter

#### Job Interview
- technical
- culture
- phone vs in-person