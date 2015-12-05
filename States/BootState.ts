module Game {
    export class AnimalSounds {
        game: Phaser.Game;
        bgSprite: Phaser.Sprite;

        constructor() {
            this.game = new Phaser.Game(320, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });

        }

        preload() {
            this.game.load.image('loadingScreen', 'Assets/Images/loadingScreen.jpg');
        }

        create() {
            this.bgSprite = this.game.add.sprite(0, 0, "bgloadingScreen");
            this.game.state.add("LoadState", Game.LoadState, true);
        }
    }
} 