const Icon = require("../lib/icon.js");
const {Shape} = require("../lib/shapes.js");

describe("Icon", () => {
    describe("Icon()", () => {
        // Test that the Icon class can be instantiated
        it("should be an instance of Icon", () => {
            const icon = new Icon();
            expect(icon).toBeInstanceOf(Icon);
        });

        // Test that shape can be assigned
        it("should store its shape property", () => {
            const shape = new Shape();
            const icon = new Icon(shape);
            expect(icon.shape).toEqual(shape);
        })
    });
});