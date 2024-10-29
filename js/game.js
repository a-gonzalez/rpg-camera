import Map from "./map.js";
import Camera from "./camera.js";
import Input from "./input.js";
import { GAME_HEIGHT, GAME_WIDTH, TILE_SIZE, IMAGE_SIZE, UP, DOWN, LEFT, RIGHT } from "./util.js";

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

        switch (this.input.lastKey)
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
        this.context.clearRect(0, 0, this.screen.width, this.screen.height);

        this.update(delta_time);
        this.drawLayer(0);
        this.drawLayer(1);
    }

    initialize(screen)
    {
        screen.width = GAME_WIDTH;
        screen.height = GAME_HEIGHT;

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.context.imageSmoothingEnabled = false;

        this.map = new Map();
        this.camera = new Camera(this.map, GAME_WIDTH, GAME_HEIGHT);
        this.input = new Input(this);
        this.game_over = false;
        this.debug = false;
    }

    drawLayer(layer)
    {
        const start_column = Math.floor(this.camera.x / TILE_SIZE);
        const end_column = start_column + (this.camera.width / TILE_SIZE);
        const start_row = Math.floor(this.camera.y / TILE_SIZE);
        const end_row = start_row + (this.camera.height / TILE_SIZE);
        const offset_x = -this.camera.x + start_column * TILE_SIZE;
        const offset_y = -this.camera.y + start_row * TILE_SIZE;

        for (let row = start_row; row <= end_row; row++)
        {
            for (let column = start_column; column <= end_column; column++)
            {
                let tile = this.map.getTile(layer, row, column);
                let x = Math.round((column - start_column) * TILE_SIZE + offset_x);
                let y = Math.round((row - start_row) * TILE_SIZE + offset_y);

                this.context.drawImage(
                    this.map.image,
                    (tile - 1) * IMAGE_SIZE % this.map.image.width,
                    Math.floor((tile - 1) / this.map.image_columns) * IMAGE_SIZE,
                    IMAGE_SIZE,
                    IMAGE_SIZE,
                    x,
                    y,
                    TILE_SIZE,
                    TILE_SIZE
                );

                if (this.debug)
                {
                    this.context.strokeRect(Math.round(x), Math.round(y), TILE_SIZE, TILE_SIZE);
                    
                    if (layer !== 0 && tile !== 0)
                    {
                        this.context.save();
                        this.context.fillStyle = "rgba(255, 36, 0, 0.3)"; // "#ff4500"; //orange-red
                        this.context.fillRect(x, y, TILE_SIZE, TILE_SIZE);
                        this.context.restore();
                    }
                }
            }
        }
    }

    toggleDebug()
    {
        this.debug = !this.debug;
    }
}