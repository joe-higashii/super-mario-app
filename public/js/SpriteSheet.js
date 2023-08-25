export default class SpriteSheet {
    constructor(image, width, heigth) {
        this.image = image;
        this.width = width;
        this.heigth = heigth;
        this.tiles = new Map();
    }

    define(name, x, y) {
        const buffer = document.createElement('canvas');
        buffer.width = this.width;
        buffer.height = this.heigth;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x * this.width,
                y * this.heigth,
                this.width,
                this.heigth,
                0,
                0,
                this.width,
                this.heigth);
        this.tiles.set(name, buffer);
    }

    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y); //draw method polymorphic
    }
}