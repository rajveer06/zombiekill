export class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.width = 50;
        this.height = 50;
        this.speed = 5;
        this.dx = 0;
        this.dy = 0;
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0) this.x = 0;
        if (this.x + this.width > this.canvas.width) this.x = this.canvas.width - this.width;
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > this.canvas.height) this.y = this.canvas.height - this.height;
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    setDirection(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
}
