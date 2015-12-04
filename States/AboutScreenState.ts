module Game {
    export class AboutScreenState extends Phaser.State {
        game: Phaser.Game;
        bgSprite: Phaser.Sprite;

        constructor() {
            super();
        }

        create() {
            this.bgSprite = this.game.add.sprite(0, 0, "about_sprite");
            var backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 30, 'homeBtn', Game.GamePlayState.prototype.backToMenu, this);
            backButton.anchor.setTo(0.5);

        }

        backToMenu() {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
        }
    }


}  