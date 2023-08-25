function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

class SpriteSheet {
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
        context.drawImage(buffer, x, y);
    }
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50, 50);

loadImage('img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('ground', 0, 0);
        sprites.draw('ground', context, 45, 62);

        context.drawImage(image, //draw method polymorphic
            0, 0,
            16, 16,

            32, 32,
            16, 16);
    });