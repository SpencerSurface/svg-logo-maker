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

    render() {
        throw new Error("render() must be overriden in Shape's subclasses");
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Circle, Square, Triangle};