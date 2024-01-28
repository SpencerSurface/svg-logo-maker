class Text {
    constructor(content="", color="black") {
        this.content = content;
        this.color = color;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
    }
}

module.exports = Text;