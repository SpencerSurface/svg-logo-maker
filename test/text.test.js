const Text = require("../lib/text.js");

describe("Text", () => {
    describe("Text()", () => {
        // Test that the Text class can be instantiated
        it("should be an instance of Text", () => {
            const text = new Text();
            expect(text).toBeInstanceOf(Text);
        });

        // Test that text content can be assigned
        it("should store its content property", () => {
            const textContent = "JS";
            const text = new Text(textContent);
            expect(text.content).toEqual(textContent);
        })

        // Test that text color can be assigned
        it("should store its color property", () => {
            const textColor = "chartreuse";
            const text = new Text("JS", "chartreuse");
            expect(text.color).toEqual(textColor);
        })
    });
});