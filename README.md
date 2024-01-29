# SVG Logo Maker

## Description

This project is a command line tool that generates an SVG-based logo from user input. This tool allows developers to quickly generate mock-up logos for use in projects, for example in web pages. Working on this tool has given me more experience with JavaScript, and specifically with Node.js on one hand and JavaScript's object-oriented features on the other.

This project is written in JavaScript to be run in Node.js. It utilizes the package inquirer.js to handle user prompting and input, the package fs.js to handle file I/O, the package path.js to create the correct filepath for calls to `writeFile()`, and jest.js for testing. The file `index.js` contains the code that runs the tool, while the files in the `lib` directory implement much of the functionality of the tool.

In completing this project, I have come to appreciate the practice of test-driven development. I didn't use it for every aspect of development, but where I did use it, I found that it was nice to be able to know exactly how my code needed to function before I implemented it - the tests worked as self-documentation for the code. That said, I'm not entirely sure that the benefits of TDD outweigh the extra time requirements, at least in small, low-stakes projects like this one.

## Installation

Install this project by cloning the repository from GitHub, then navigating to the project directory in your terminal and running `npm install`.

## Usage

To use this tool, navigate to the project's directory in your terminal and run the command `node index.js`. The tool will prompt you for information about the logo you are generating. After responding to the prompts, an SVG file will be generated in the   `output` directory with the filename `logo.svg`.

A sample of a SVG file generated with this tool is included as [example.svg](./examples/example.svg) in the `examples` directory. A PNG image of the example has also been included (as [example.png](./examples/example.png)).

A walkthrough of the functionality of the tool is provided in the following video: [Walkthrough video](./walkthrough.webm)

## Tests

The tests included for this project cover the following classes: Icon, Shape and its subclasses, and Text. They are included in the `test` directory. To run them, run the comment `npm run test` in the terminal.

## Credits

All code was written on my own. The file structure was suggested by, and the functionality of the shape classes was essentially required by, instructions provided by edX Boot Camps LLC. The contents of `index.js`, `cli.js`, and `createDocument.js` were modelled off examples given by edX for a different project (the List Generator Miniproject).

## License

This project is licensed under the GNU General Public License version 3. See [LICENSE](./LICENSE) for the full text of the license.