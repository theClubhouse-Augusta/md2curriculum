var fs = require('fs');

/*
* Creates An Output Folder, Sub Folders are named Content Headings
* Homepages are determined off of defaultContent
* Activities are read off of content levels
*/
export default function Output (data) {

    let outputFolder = './output/';
    let defaultContent = "content";
    let homePage = "readme";
    let fileType = ".md";
    
    if (!fs.existsSync(outputFolder)){
        fs.mkdirSync(outputFolder);
    }

    Object.keys(data.content).forEach((key) => {

        if (!fs.existsSync(outputFolder + key)){
            fs.mkdirSync(outputFolder + key);
        }
    
        Object.keys(data.content[key]).forEach((file) =>{
            let fileName = "";

            if( file === defaultContent ) {
                fileName = (homePage + fileType);
            } else {
                fileName = (file + fileType);
            }

            let writeStream = fs.createWriteStream(outputFolder + key + "/" + fileName);
            writeStream.write(data.content[key][file]);
            writeStream.end();
        });
    });
}