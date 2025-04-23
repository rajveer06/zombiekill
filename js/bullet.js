export class Bullet {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 5;
        this.height = 15;
        this.speed = 7;
        this.active = false;
    }

    shoot(x, y) {
        this.x = x;
        this.y = y;
        this.active = true;
    }

    move() {
        this.y -= this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
