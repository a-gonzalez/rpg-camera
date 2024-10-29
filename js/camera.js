import { TILE_SIZE } from "./util.js";

export default class Camera
{
    constructor(map, width, height)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(map, width, height);
    }

    initialize(map, width, height)
    {
        this.map = map;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.speed = 256;
        this.max_x = map.columns * TILE_SIZE - this.width;
        this.max_y = map.rows * TILE_SIZE - this.height;
    }

    move(delta_time, speedX, speedY)
    {// scaling movement vectors by delta-time makes the motion consistent across devices
        this.x += speedX * this.speed * delta_time;
        this.y += speedY * this.speed * delta_time;

        this.x = Math.max(0, Math.min(this.x, this.max_x));
        this.y = Math.max(0, Math.min(this.y, this.max_y));
    }
}