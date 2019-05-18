var fs = require('fs'),
    path = require('path'),
    readline = require('readline');

// read file presented as second argument
var filePath = path.join(__dirname, String(process.argv[2]));


fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        var lineReader = readline.createInterface({
            input: fs.createReadStream(filePath)
          });
          
          lineReader.on('line', function (line) {
            console.log('Line from file:', line);
          });
    } else {
        console.log(err);
    }
});


