const {Shape, Circle, Square, Triangle} = require("../lib/shapes.js");

describe("Shape", () => {
    describe("Shape()", () => {
        // Test that the Shape class can be instantiated
        it("should initialize correctly", () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });

        // Test that color can be assigned
        it("should store its color property", () => {
            const color = "chartreuse";
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