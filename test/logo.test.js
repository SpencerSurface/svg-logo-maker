const Logo = require("../lib/logo.js");
const {Circle} = require("../lib/shapes.js");
const Text = require("../lib/text.js");

describe("Logo", () => {
    describe("Logo()", () => {
        // Test that the Logo class can be instantiated
        it("should be an instance of Logo", () => {
            const logo = new Logo();
            expect(logo).toBeInstanceOf(Logo);
        });

        // Test that shape can be assigned
        it("should store its shape property", () => {
            const shape = new Circle();
            const logo = new Logo(shape);
            expect(logo.shape).toEqual(shape);
        });

        // Test that text can be assigned
        it("should store its text property", () => {
            const shape = new Circle();
            const text = new Text();
            const logo = new Logo(shape, text);
            expect(logo.text).toEqual(text);
        });
    });

    describe("render()", () => {
        // Test that render() returns the correct SVG string
        it("should return the correct SVG string", () => {
            const shape = new Circle();
            const text = new Text();
            const logo = new Logo(shape, text);
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render() + text.render()}</svg>`;
            expect(logo.render()).toEqual(expected);
        })
    })
});