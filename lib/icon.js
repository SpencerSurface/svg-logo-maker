// Define the Logo class
class Icon {
    constructor(shape=null, text=null) {
        this.shape = shape;
        this.text = text;
    }

    // Return the complete SVG code for the logo
    render() {
        // Can only generate the SVG code successfully if both this.shape and this.text are defined
        if (!this.shape) {
            throw new Error("this.shape must be defined");
        } else if (!this.text) {
            throw new Error("this.text must be defined");
        } else {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render() + this.text.render()}</svg>`;
        }
    }
}

module.exports = Icon;