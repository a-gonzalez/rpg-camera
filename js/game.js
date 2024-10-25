

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);
    }

    render(delta_time)
    {
        this.context.clearRect(0, 0, this.screen.width, this.screen.height);

        this.context.fillRect(10, 40, 50, 50);
    }

    initialize(screen)
    {
        screen.width = 400;
        screen.height = 400;

        /*let image = new Image();
        image.src = "img/simple.png";*/

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.context.imageSmoothingEnabled = false;
        this.game_over = false;
        this.debug = false;
    }

    toggleDebug()
    {
        this.debug = !this.debug;
    }
}