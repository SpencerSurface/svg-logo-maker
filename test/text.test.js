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
            const content = "JS";
            const text = new Text(content);
            expect(text.content).toEqual(content);
        });

        // Test that text color can be assigned
        it("should store its color property", () => {
            const color = "chartreuse";
            const text = new Text("JS", color);
            expect(text.color).toEqual(color);
        });
    });

    describe("render()", () => {
        // Test that the render() method returns the correct SVG string
        it("should return the correct SVG string", () => {
            const content = "CSS";
            const color = "#FF00FF"
            const text = new Text(content, color);
            const expected = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${content}</text>`;
            expect(text.render()).toEqual(expected);
        });
    });
});