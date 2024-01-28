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
            const color = "chartreuse";
            const shape = new Shape(color);
            expect(shape.color).toEqual(color);
        });

        // Test that text can be assigned
        it("should store its text property", () => {
            const color = "chartreuse";
            const text = "JS";
            const shape = new Shape(color, text);
            expect(shape.text).toEqual(text);
        });

        // Test that textColor can be assigned
        it("should store its text property", () => {
            const color = "chartreuse";
            const text = "JS";
            const textColor = "#000000"
            const shape = new Shape(color, text, textColor);
            expect(shape.textColor).toEqual(textColor);
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
        // Test that returns the correct SVG string
        it("should return an SVG string", () => {
            const color = "chartreuse";
            const text = "JS";
            const textColor = "#000000";
            const circle = new Circle(color, text, textColor);
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
            expect(circle.render()).toEqual(expected);
        });
    });
});