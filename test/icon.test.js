const Icon = require("../lib/icon.js");
const {Circle} = require("../lib/shapes.js");
const Text = require("../lib/text.js");

describe("Icon", () => {
    describe("Icon()", () => {
        // Test that the Icon class can be instantiated
        it("should be an instance of Icon", () => {
            const icon = new Icon();
            expect(icon).toBeInstanceOf(Icon);
        });

        // Test that shape can be assigned
        it("should store its shape property", () => {
            const shape = new Circle();
            const icon = new Icon(shape);
            expect(icon.shape).toEqual(shape);
        });

        // Test that text can be assigned
        it("should store its text property", () => {
            const shape = new Circle();
            const text = new Text();
            const icon = new Icon(shape, text);
            expect(icon.text).toEqual(text);
        });
    });

    describe("render()", () => {
        // Test that render() returns the correct SVG string
        it("should return the correct SVG string", () => {
            const shape = new Circle();
            const text = new Text();
            const icon = new Icon(shape, text);
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render() + text.render()}</svg>`;
            expect(icon.render()).toEqual(expected);
        })
    })
});