export class Zombie {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.width = 40;
        this.height = 40;
        this.speed = Math.random() * 3 + 1;
    }

    move() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
