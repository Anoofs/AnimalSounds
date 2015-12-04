module Game {
    /// <reference path="Media.d.ts"/>
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;
        bgSoundSource;
        bgSprite: Phaser.Sprite;
        textSprite: Phaser.Sprite;
        buttonArray: Phaser.ArraySet;
        playGameBtn: Phaser.Button;
        helpBtn: Phaser.Button;
        aboutBtn: Phaser.Button;
        fx: Phaser.Sound;
        currentMedia:Media;

        constructor() {
            super();
        }

        create() {
            this.bgSprite = this.game.add.sprite(0, 0, "bg");
            this.textSprite = this.game.add.sprite(0, 0, "bg_text");

            var catSprite = this.game.add.sprite(0, 0, "catAnim");
            catSprite.x = this.game.world.centerX;
            catSprite.y = this.game.world.centerY - 20;

            catSprite.animations.add('play');
            catSprite.animations.play('play', 23, true);
            catSprite.anchor.setTo(0.5);
            //catSprite.scale.setTo(0.12);


            this.playGameBtn = this.game.add.button(this.game.world.centerX , this.game.world.centerY + 60, 'menuBtn', Game.TitleScreenState.prototype.actionOnMenuBtn, this);
            this.playGameBtn.name = 'GamePlayState';
            this.playGameBtn.scale.setTo(1, 1.4);
            this.playGameBtn.anchor.setTo(0.5);
            var newgameTxt:Phaser.Sprite = this.game.add.sprite(this.playGameBtn.x, this.playGameBtn.y, "text_newgame");
            newgameTxt.anchor.setTo(0.5);

            this.helpBtn = this.game.add.button(this.playGameBtn.x, this.playGameBtn.y + this.playGameBtn.height, 'menuBtn', Game.TitleScreenState.prototype.actionOnMenuBtn, this);
            this.helpBtn.name = 'HelpScreenState';
            this.helpBtn.scale.setTo(1, 1.4);
            this.helpBtn.anchor.setTo(0.5);
            var helpTxt = this.game.add.sprite(this.helpBtn.x, this.helpBtn.y, "text_help");
            helpTxt.anchor.setTo(0.5);

            this.aboutBtn = this.game.add.button(this.helpBtn.x, this.helpBtn.y + this.helpBtn.height, 'menuBtn', Game.TitleScreenState.prototype.actionOnMenuBtn, this);
            this.aboutBtn.name = 'AboutScreenState';
            this.aboutBtn.scale.setTo(1, 1.4);
            this.aboutBtn.anchor.setTo(0.5);
            var aboutTxt = this.game.add.sprite(this.aboutBtn.x, this.aboutBtn.y, "text_about");
            aboutTxt.anchor.setTo(0.5);

            this.buttonTween(this.playGameBtn,0);
            this.buttonTween(newgameTxt,0);

            this.buttonTween(this.helpBtn,1000);
            this.buttonTween(helpTxt,1000);

            this.buttonTween(this.aboutBtn,1500);
            this.buttonTween(aboutTxt,1500);

            this.bgSoundSource = '/android_asset/www/Assets/Audio/titleMusic.ogg';
            this.playBgAudio(this.bgSoundSource);

            //this.bgSound = this.game.add.audio("titleSong");
            //this.bgSound.loop = true;
            //this.bgSound.play();
        }

        actionOnMenuBtn(buttonArg) {
            if (this.currentMedia)
                this.currentMedia.release();
            //console.log(buttonArg.name);
            if (buttonArg.name == "GamePlayState")
                this.game.state.add("GamePlayState", Game.GamePlayState, true);

            else if (buttonArg.name == "HelpScreenState")
                this.game.state.add("HelpScreenState", Game.HelpScreenState, true);

            else if (buttonArg.name == "AboutScreenState") 
                this.game.state.add("AboutScreenState", Game.AboutScreenState, true);

        }

        playBgAudio(src: string) {
            if(this.currentMedia)
            this.currentMedia.release();
            this.currentMedia = new Media(src, null, null, null);
            this.currentMedia.play();

            var timer = setTimeout(this.audioLoopCallback, 9000);
            

        }

        update() {

        }
        audioLoopCallback() {
            this.playBgAudio(this.bgSoundSource);
        }

        buttonTween(arg,delay) {
            var tween = this.add.tween(arg.scale).to({ x: 0.9, y: 0.9 }, 1500, "Linear", true, 0, -1);
            tween.yoyo(true, delay);
        }
    }
    }
} 