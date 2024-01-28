const {Shape, Circle, Square, Triangle} = require("../lib/shapes.js");

describe("Shape", () => {
    describe("Shape()", () => {
        // Test that the Shape class can be instantiated
        it("should be an instance of Shape", () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });

        // Test that color can be assigned
        it("should store its color property", () => {
            const color = "#000000";
            const shape = new Shape(color);
            expect(shape.color).toEqual(color);
        });
    });

    describe("render()", () => {
        // Test that render() throws an error when called directly
        it("should throw an error when called", () => {
            const shape = new Shape();
            const error = new Error("render() must be overriden in Shape's subclasses");
            expect(() => shape.render()).toThrow(error);
        });
    });
});

describe("Circle", () => {
    describe("Circle()", () => {
        // Test that the Circle class can be instantiated
        it("should be an instance of Circle", () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });

        // Test that the Circle class is a subclass of the Shape class
        it("should be an instance of Shape", () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Shape);
        });
    });

    describe("render()", () => {
        // Test that render() returns the correct SVG string
        it("should return correct SVG string", () => {
            const color = "chartreuse";
            const circle = new Circle(color);
            const expected = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
            expect(circle.render()).toEqual(expected);
        });
    });
});

describe("Square", () => {
    describe("Square()", () => {
        // Test that the Square class can be instantiated
        it("should be an instance of Square", () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });

        // Test that the Square class is a subclass of the Shape class
        it("should be an instance of Shape", () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Shape);
        });
    });

    describe("render()", () => {
        // Test that render() returns the correct SVG string
        it("should return correct SVG string", () => {
            const color = "chartreuse";
            const square = new Square(color);
            const expected = `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
            expect(square.render()).toEqual(expected);
        });
    });
});

describe("Triangle", () => {
    describe("Triangle()", () => {
        // Test that the Triangle class can be instantiated
        it("should be an instance of Triangle", () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });

        // Test that the Triangle class is a subclass of the Shape class
        it("should be an instance of Shape", () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Shape);
        });
    });

    describe("render()", () => {
        // Test that render() returns the correct SVG string
        // (Required test)
        it("should return the correct SVG string", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});