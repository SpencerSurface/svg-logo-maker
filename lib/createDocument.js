const Icon = require("./icon.js");
const {Circle, Square, Triangle} = require("./shapes.js");
const Text = require("./text.js");

function createDocument(shapeType, shapeColor, textContent, textColor) {
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

    let text = new Text(textContent, textColor);

    let logo = new Icon(shape, text);
    
    return logo.render();
}

module.exports = createDocument;