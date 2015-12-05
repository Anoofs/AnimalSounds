module Game {
    export class AnimalSounds {

        game: Phaser.Game;
        buttonTop: Phaser.Button;
        buttonBottom: Phaser.Button;
        soundButton: Phaser.Button;
        background: Phaser.TileSprite;
        text: Phaser.Text;
        activeSound: Phaser.Sound;
        fx: Phaser.Sound;
        //animalsArray: Object;

        constructor() {
            this.game = new Phaser.Game(320, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
          //  this.animalsArray = { 'cat': {}}
            
        }

        preload() {

            //this.game.load.spritesheet('catAnim', 'Assets/Images/catAnim.png', 960, 720);
            this.game.load.spritesheet('catAnim', 'Assets/Images/catAnim.png', 115, 86);


            this.game.load.image('playButton', 'Assets/Images/ui_playSound.png');
            //this.game.load.spritesheet('playButton', 'Assets/Images/ui_playSound_anim.png', 320, 83);

            
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

            //this.game.load.audio('sheep_sound', 'file:///android_asset/www/Assets/Audio/sheep_sound.ogg');
            //this.game.load.audio('elephant_sound', 'file:///android_asset/www/Assets/Audio/elephant_sound.ogg');
            //this.game.load.audio('monkey_sound', 'file:///android_asset/www/Assets/Audio/monkey_sound.ogg');
            //this.game.load.audio('horse_sound', 'file:///android_asset/www/Assets/Audio/horse_sound.ogg');
            //this.game.load.audio('lion_sound', 'file:///android_asset/www/Assets/Audio/lion_sound.ogg');
            //this.game.load.audio('dog_sound', 'file:///android_asset/www/Assets/Audio/dog_sound.ogg');
            //this.game.load.audio('cat_sound', 'file:///android_asset/www/Assets/Audio/cat_sound.ogg');
            //this.game.load.audio('bear_sound', 'file:///android_asset/www/Assets/Audio/bear_sound.ogg');
            //this.game.load.audio('hyena_sound', 'file:///android_asset/www/Assets/Audio/hyena_sound.ogg');
            //this.game.load.audio('pelican_sound', 'file:///android_asset/www/Assets/Audio/pelican_sound.ogg');
            //this.game.load.audio('owl_sound', 'file:///android_asset/www/Assets/Audio/owl_sound.ogg');

            //this.game.load.audio('correct', 'file:///android_asset/www/Assets/Audio/correct.ogg');
            //this.game.load.audio('wrong', 'file:///android_asset/www/Assets/Audio/wrong.ogg');


           // this.game.load.bitmapFont('desyrel', 'Assets/Fonts/desyrel.png', 'Assets/Fonts/desyrel.xml');

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

            //this.game.load.bitmapFont('shortStack', 'Assets/Fonts/shortStack.png', 'Assets/Fonts/shortStack.xml');
            this.game.load.bitmapFont('nokia16', 'Assets/Fonts/nokia16.png', 'Assets/Fonts/nokia16.xml');

        }

        create() {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }

    }
}
window.onload = () => {
    var game = new Game.AnimalSounds();
};

