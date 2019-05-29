"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Output;

var fs = require("fs");
/*
 * Creates An Output Folder, Sub Folders are named Content Headings
 * Homepages are determined off of defaultContent
 * Activities are read off of content levels
 */


function Output(data) {
  var outputFolder = "./output/";
  var defaultContent = "content";
  var homePage = "readme";
  var fileType = ".md";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
    console.log("Making your " + outputFolder + " folder");
  } else {
    console.log(outputFolder + " already exists. No need to build it");
  }

  Object.keys(data.content).forEach(function (key) {
    if (!fs.existsSync(outputFolder + key)) {
      console.log("Building your " + key + " folder");
      fs.mkdirSync(outputFolder + key);
    } else {
      console.log(key + " folder already exists. No need to build it.");
    }

    Object.keys(data.content[key]).forEach(function (file) {
      var fileName = "";

      if (file === defaultContent) {
        fileName = homePage + fileType;
      } else {
        fileName = file + fileType;
      }

      var writeStream = fs.createWriteStream(outputFolder + key + "/" + fileName);
      writeStream.write(data.content[key][file]);
      writeStream.end();
    });
  });
  console.log("Build Completed");
}