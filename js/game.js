import { Player } from './player.js';
import { Zombie } from './zombie.js';
import { Bullet } from './bullet.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const player = new Player(canvas);
const bullet = new Bullet();
let zombies = [];
let gameOver = false;

document.addEventListener('keydown', (e) => movePlayer(e, true));
document.addEventListener('keyup', (e) => movePlayer(e, false));
document.addEventListener('keydown', shootBullet);

function movePlayer(e, moving) {
    let dx = 0, dy = 0;

    if (e.key === 'ArrowLeft' || e.key === 'a') dx = moving ? -player.speed : 0;
    if (e.key === 'ArrowRight' || e.key === 'd') dx = moving ? player.speed : 0;
    if (e.key === 'ArrowUp' || e.key === 'w') dy = moving ? -player.speed : 0;
    if (e.key === 'ArrowDown' || e.key === 's') dy = moving ? player.speed : 0;

    player.setDirection(dx, dy);
}

function shootBullet(e) {
    if (e.key === ' ' && !bullet.active) {
        bullet.shoot(player.x + player.width / 2 - bullet.width / 2, player.y);
    }
}

function createZombie() {
    if (Math.random() < 0.02) {
        zombies.push(new Zombie(canvas));
    }
}

function updateGame() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.move();
    bullet.move();
    createZombie();

    zombies.forEach((zombie, index) => {
        zombie.move();
        zombie.draw(ctx);

        if (bullet.active && zombie.x < bullet.x + bullet.width && zombie.x + zombie.width > bullet.x && zombie.y < bullet.y + bullet.height && zombie.y + zombie.height > bullet.y) {
            zombies.splice(index, 1);
            bullet.active = false;
        }

        if (zombie.y + zombie.height > player.y && zombie.x < player.x + player.width && zombie.x + zombie.width > player.x) {
            gameOver = true;
            alert('Game Over!');
        }
    });

    bullet.draw(ctx);
    player.draw(ctx);

    requestAnimationFrame(updateGame);
}

updateGame();
