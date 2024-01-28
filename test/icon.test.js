const Icon = require("../lib/icon.js");

describe("Icon", () => {
    describe("Icon()", () => {
        // Test that the Icon class can be instantiated
        it("should be an instance of Icon", () => {
            const icon = new Icon();
            expect(icon).toBeInstanceOf(Icon);
        });
    });
});