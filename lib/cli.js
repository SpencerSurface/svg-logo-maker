const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const {join} = require('path');
const createDocument = require("./createDocument.js");

// Define the CLI (Command Line Interface) class
class CLI {
    // Define its method run()
    run() {
        // Prompt the user for their input
        inquirer.prompt([
            {
                type: "list",
                name: "shape",
                message: "Select the logo's shape:",
                choices: [
                    "Circle",
                    "Square",
                    "Triangle"
                ]
            },
            {
                type: "input",
                name: "color",
                message: "Enter the logo's color:"
            },
            {
                type: "input",
                name: "text",
                message: "Enter the logo's text (three characters or less):",
                validate(input) {
                    // Verify that the input is the correct length
                    if (input.length <= 3) {
                        return true;
                    } else {
                        return "Text must be three characters in length or less.";
                    }
                }
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter the text's color:"
            }
        ])
        // Generate SVG code using the user's input and write it to ../output/logo.svg
        .then(({shape, color, text, textColor}) => {
            return writeFile(join(__dirname, "..", "output", "logo.svg"), createDocument(shape, color, text, textColor));
        })
        // Log a message telling the user the logo was generated
        .then(() => console.log("Generated logo.svg"))
        // Catch any errors that occurred
        .catch((err) => {
            console.error(err);
            console.log("Error creating your logo");
        })
    }
}

module.exports = CLI;