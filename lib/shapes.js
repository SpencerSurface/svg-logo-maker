class Shape {
    constructor(color="green") {
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
        return `<square x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="58,20 242,20 150,180" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Circle, Square, Triangle};