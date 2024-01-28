class Icon {
    constructor(shape=null, text=null) {
        this.shape = shape;
        this.text = text;
    }

    render() {
        if (!this.shape) {
            throw new Error("this.shape must be defined");
        // } else if (!this.text) {
            // throw new Error("this.text must be defined");
        } else {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;
        }
    }
}

module.exports = Icon;