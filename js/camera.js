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
        this.x = 128;
        this.y = 128;
        this.speed = 256;
        this.max_x = this.map.image.width - this.width;
        this.max_y = this.map.image.height - this.height;
    }

    render(context)
    {
        
    }

    move(delta_time, speedX, speedY)
    {// scaling movement vectors by delta-time makes the motion consistent across devices
        this.x += speedX * this.speed * delta_time;
        this.y += speedY * this.speed * delta_time;

        this.x = Math.max(0, Math.min(this.x, this.max_x));
        this.y = Math.max(0, Math.min(this.y, this.max_y));
    }
}