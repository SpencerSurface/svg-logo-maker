const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const Icon = require("./icon.js");
const {Circle, Square, Triangle} = require("./shapes.js");
const Text = require("./text.js");

class CLI {
    constructor() {
        this.shape = "";
        this.color = "";
        this.text = "";
        this.textColor = "";
    }

    run() {
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
        .then(({shape, color, text, textColor}) => {
            let logoShape;
            switch (shape) {
                case "Circle":
                    logoShape = new Circle(color);
                    break;
                case "Square":
                    logoShape = new Square(color);
                    break;
                case "Triangle":
                    logoShape = new Triangle(color);
                    break;
            }

            let logoText = new Text(text, textColor);

            let logo = new Icon(logoShape, logoText);

            return writeFile("../output/logo.svg", logo.render());
        })
        .then(() => console.log("Created logo.svg"))
        .catch((err) => {
            console.error(err);
            console.log("Error creating your logo");
        })
    }
}

module.exports = CLI;