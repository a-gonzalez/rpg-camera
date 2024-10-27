import { TILE_SIZE, IMAGE_SIZE } from "./util.js";

export default class Map
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize();
    }

    initialize()
    {
        this.columns = 12;
        this.rows = 12;

        this.image = new Image();
        this.image.src = "img/tilemap.png";
        //this.image.src = "img/full_map.png";
        this.image_columns = this.image.width / IMAGE_SIZE;

        this.layers = [[
            18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
            18, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 18,
            18, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 18,
            18, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 18,
            18, 6, 7, 16, 12, 12, 12, 12, 12, 17, 8, 18,
            18, 6, 7, 8, 18, 18, 18, 18, 18, 6, 8, 18,
            18, 6, 7, 8, 18, 18, 18, 18, 18, 6, 8, 18,
            18, 6, 7, 21, 2, 2, 2, 3, 18, 6, 8, 18,
            18, 6, 7, 7, 7, 7, 7, 8, 18, 6, 8, 18,
            18, 6, 7, 7, 7, 7, 7, 21, 2, 22, 8, 18,
            18, 11, 12, 12, 12, 12, 12, 12, 12, 12, 13, 18,
            18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18
        ], [
            19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
            4, 20, 23, 24, 0, 0, 23, 23, 23, 25, 24, 20,
            9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 14, 0, 0, 5, 0, 0, 0, , 20,
            14, 0, 0, 19, 0, 23, 10, 0, 0, 0, 0, 15,
            19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20,
            5, 0, 0, 0, 0, 24, 0, 0, 15, 0, 0, 0,
            10, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            5, 15, 10, 0, 0, 0, 20, 0, 0, 0, 4, 0,
            10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 23,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
        ], [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]];
    }

    render(context)
    {
        context.drawImage(this.image, 0, 0);
    }

    getTile(layer, row, column)
    {
        return this.layers[layer][this.columns * row + column];
    }

    /*drawCollisionMap(context)
    {
        context.fillStyle = "rgba(255, 36, 0, 0.3)"; // "#ff4500"; //orange-red
        context.save();

        for (let row = 0; row < getRowCount(); row++)
        {
            for (let column = 0; column < getColumnCount(); column++)
            {
                if (this.getTile(this.level_1.collisionLayer, row, column) === 1)
                {
                    context.fillRect(column * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);     
                }
            }
        }
        context.restore();
    }*/
}

/*
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
*/