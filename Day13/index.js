
//1. Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
        message: "Enter yor URL",
        name: "URL"
    }
  ])
  .then((answers) => {
   const url = answers.URL;
   //2. Use the qr-image npm package to turn the user entered URL into a QR code image.

    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('portfolio.png'));
    //3. Create a txt file to save the user input using the native fs node module.

    fs.writeFile("portfolio.txt", url, (err)=> {
        if (err) throw err;
        console.log("File has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
