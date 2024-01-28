const Logo = require("./logo.js");
const {Circle, Square, Triangle} = require("./shapes.js");
const Text = require("./text.js");

// This function takes in user input and returns a string of completed SVG code
function createDocument(shapeType, shapeColor, textContent, textColor) {
    // Instantiate a Shape object based on the shape type and color
    let shape;
    switch (shapeType) {
        case "Circle":
            shape = new Circle(shapeColor);
            break;
        case "Square":
            shape = new Square(shapeColor);
            break;
        case "Triangle":
            shape = new Triangle(shapeColor);
            break;
    }

    // Instantiate a Text object based on text content and color
    let text = new Text(textContent, textColor);

    // Instantiate a Logo object based on shape and text
    let logo = new Logo(shape, text);
    
    // Use the logo's render() method to generate the SVG code
    return logo.render();
}

module.exports = createDocument;