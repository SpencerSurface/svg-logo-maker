// Define the Shape class
class Shape {
    constructor(color="green") {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    // Shape's render() should be overridden by Shape's child classes
    render() {
        throw new Error("render() must be overriden in Shape's subclasses");
    }
}

// Define the Circle class
class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    // Override Shape's render() to return the circle portion of the SVG code
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define the Square class
class Square extends Shape {
    constructor(color) {
        super(color);
    }

    // Override Shape's render() to return the square portion of the SVG code
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

// Define the Triangle class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    // Override Shape's render() to return the triangle portion of the SVG code
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Circle, Square, Triangle};