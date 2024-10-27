export default class Map
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);
    }

    initialize()
    {
        this.image = new Image();
        this.image.src = "img/full_map.png";
    }

    render(context)
    {
        context.drawImage(this.image, 0, 0);
    }
}