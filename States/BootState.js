var Game;
(function (Game) {
    var AnimalSounds = (function () {
        function AnimalSounds() {
            this.game = new Phaser.Game(320, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
        AnimalSounds.prototype.preload = function () {
            this.game.load.image('loadingScreen', 'Assets/Images/loadingScreen.jpg');
        };
        AnimalSounds.prototype.create = function () {
            this.bgSprite = this.game.add.sprite(0, 0, "bgloadingScreen");
            this.game.state.add("LoadState", Game.LoadState, true);
        };
        return AnimalSounds;
    })();
    Game.AnimalSounds = AnimalSounds;
})(Game || (Game = {}));
//# sourceMappingURL=BootState.js.map