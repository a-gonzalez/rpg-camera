import Map from "./map.js";
import Camera from "./camera.js";
import Input from "./input.js";
import { GAME_HEIGHT, GAME_WIDTH, TILE_SIZE, IMAGE_SIZE } from "./util.js";

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
            case this.input.LEFT :
            {
                speedX = -1; break;
            }
            case this.input.RIGHT :
            {
                speedX = 1; break;
            }
            case this.input.DOWN :
            {
                speedY = 1; break;
            }
            case this.input.UP :
            {
                speedY = -1; break;
            }
        }
        this.camera.move(delta_time, speedX, speedY);
    }

    render(delta_time)
    {
        //this.update(delta_time);

        this.context.clearRect(0, 0, this.screen.width, this.screen.height);

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
        //let index = 1;

        for (let row = 0; row <= this.map.rows; row++)
        {
            for (let column = 0; column <= this.map.columns; column++)
            {
                let tile = this.map.getTile(layer, row, column);

                this.context.drawImage(
                    this.map.image,
                    (tile - 1) * IMAGE_SIZE % this.map.image.width,
                    Math.floor((tile - 1) / this.map.image_columns) * IMAGE_SIZE,
                    IMAGE_SIZE,
                    IMAGE_SIZE,
                    column * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );

                if (this.debug)
                {
                    this.context.strokeRect(column * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                    //this.context.font = "24px Arial";
                    //this.context.fillText(index, column * TILE_SIZE, row * TILE_SIZE);


                    //index++;
                }
            }
        }//context.fillStyle = "rgba(255, 36, 0, 0.3)"; // "#ff4500"; //orange-red
    }

    toggleDebug()
    {
        this.debug = !this.debug;
    }
}