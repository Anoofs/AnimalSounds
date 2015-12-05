var Game;
(function (Game) {
    var AnimalSounds = (function () {
        // fx: Phaser.Sound;
        function AnimalSounds() {
            this.game = new Phaser.Game(320, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
        AnimalSounds.prototype.preload = function () {
            this.game.load.spritesheet('catAnim', 'Assets/Images/catAnim.png', 115, 86);
            this.game.load.image('playButton', 'Assets/Images/ui_playSound.png');
            this.game.load.image('sheep', 'Assets/Images/sheep.jpg');
            this.game.load.image('elephant', 'Assets/Images/elephant.jpg');
            this.game.load.image('horse', 'Assets/Images/horse.jpg');
            this.game.load.image('monkey', 'Assets/Images/monkey.jpg');
            this.game.load.image('cat', 'Assets/Images/cat.jpg');
            this.game.load.image('dog', 'Assets/Images/dog.jpg');
            this.game.load.image('lion', 'Assets/Images/lion.jpg');
            this.game.load.image('bear', 'Assets/Images/bear.jpg');
            this.game.load.image('hyena', 'Assets/Images/hyena.jpg');
            this.game.load.image('pelican', 'Assets/Images/pelican.jpg');
            this.game.load.image('owl', 'Assets/Images/owl.jpg');
            this.game.load.image('mouse', 'Assets/Images/mouse.png');
            this.game.load.image('peacock', 'Assets/Images/peacock.png');
            this.game.load.image('donkey', 'Assets/Images/donkey.png');
            this.game.load.image('cow', 'Assets/Images/cow.png');
            this.game.load.image('tapir', 'Assets/Images/tapir.png');
            this.game.load.image('wolf', 'Assets/Images/wolf.png');
            this.game.load.image('alligator', 'Assets/Images/alligator.png');
            //  this.game.load.image('pig', 'Assets/Images/pig.png');
            this.game.load.image('frog', 'Assets/Images/frog.png');
            this.game.load.image('bg', 'Assets/Images/title_bg.jpg');
            this.game.load.image('bg_text', 'Assets/Images/title_text.png');
            this.game.load.image('text_newgame', 'Assets/Images/title_btn_newgame.png');
            this.game.load.image('text_help', 'Assets/Images/title_btn_help.png');
            this.game.load.image('text_about', 'Assets/Images/title_btn_about.png');
            this.game.load.image('menuBtn', 'Assets/Images/ui_menu_button.png');
            this.game.load.image('homeBtn', 'Assets/Images/ui_home_button.png');
            this.game.load.image('okBtn', 'Assets/Images/ui_ok_button.png');
            this.game.load.image('help_sprite', 'Assets/Images/help_sprite.png');
            this.game.load.image('about_sprite', 'Assets/Images/about_scr.png');
            this.game.load.image("correct_sprite", "Assets/Images/correct_sprite.png");
            this.game.load.image("wrong_sprite", "Assets/Images/wrong_sprite.png");
            this.game.load.image("gameover_sprite", "Assets/Images/gameover_sprite.png");
            this.game.load.bitmapFont('nokia16', 'Assets/Fonts/nokia16.png', 'Assets/Fonts/nokia16.xml');
        };
        AnimalSounds.prototype.create = function () {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return AnimalSounds;
    })();
    Game.AnimalSounds = AnimalSounds;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.AnimalSounds();
};
//# sourceMappingURL=load.js.map