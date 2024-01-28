const Text = require("../lib/text.js");

describe("Text", () => {
    describe("Text()", () => {
        // Test that the Text class can be instantiated
        it("should be an instance of Text", () => {
            const text = new Text();
            expect(text).toBeInstanceOf(Text);
        });
    });
});