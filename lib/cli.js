const inquirer = require("inquirer");

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
                message: "Enter the logo's text (three characters or less):"
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter the text's color:"
            }
        ])
    }
}

module.exports = CLI;