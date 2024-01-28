const Icon = require("../lib/icon.js");
const {Circle} = require("../lib/shapes.js");

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
    });

    describe("render()", () => {
        it("should return the correct SVG string", () => {
            const shape = new Circle();
            const icon = new Icon(shape);
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;
            expect(icon.render()).toEqual(expected);
        })
    })
});