import Map from "./map.js";
import Camera from "./camera.js";
import Input from "./input.js";
import { GAME_HEIGHT, GAME_WIDTH, UP, DOWN, RIGHT, LEFT } from "./util.js";

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);
    }

    update(delta_time)
    {
        let speedX = 0;
        let speedY = 0;

        switch (this.input.keys[0])
        {
            case LEFT :
            {
                speedX = -1; break;
            }
            case RIGHT :
            {
                speedX = 1; break;
            }
            case DOWN :
            {
                speedY = 1; break;
            }
            case UP :
            {
                speedY = -1; break;
            }
        }
        this.camera.move(delta_time, speedX, speedY);
    }

    render(delta_time)
    {
        this.update(delta_time);

        this.context.clearRect(0, 0, this.screen.width, this.screen.height);
        this.context.drawImage(
            this.map.image,
            this.camera.x,
            this.camera.y,
            GAME_WIDTH,
            GAME_HEIGHT,
            0,
            0,
            GAME_WIDTH,
            GAME_HEIGHT
        )
    }

    initialize(screen)
    {
        screen.width = GAME_WIDTH;
        screen.height = GAME_HEIGHT;

        this.screen = screen;
        this.context = this.screen.getContext("2d");

        this.map = new Map();
        this.camera = new Camera(this.map, GAME_WIDTH, GAME_HEIGHT);
        this.input = new Input(this);
        this.game_over = false;
        this.debug = false;
    }

    toggleDebug()
    {
        this.debug = !this.debug;
    }
}