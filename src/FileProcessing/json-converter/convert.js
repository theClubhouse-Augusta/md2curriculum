const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

export default function Convert (data) {

    // Markdown it so far only html
    // var result = md.render(data);
    // console.log(result);

    // M2J cli style only parsing front-matter
    exec('m2j 1.txt', (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return;
        }
      
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
}