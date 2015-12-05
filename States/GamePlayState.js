var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game;
(function (Game) {
    var GamePlayState = (function (_super) {
        __extends(GamePlayState, _super);
        function GamePlayState() {
            _super.call(this);
            this.countDownTimer = 45;
        }
        GamePlayState.prototype.create = function () {
            this.game.stage.backgroundColor = '#000000';
            this.reload();
            this.loadModals();
            var scoreName = this.game.add.bitmapText(0, 1, 'nokia16', 'Score: ');
            // var scoreName = this.game.add.text(0, 0, 'Score:', { fill: '#ffffff' });
            this.score = 0;
            this.scoreText = this.game.add.text(0 + scoreName.width, 0, '0', { fill: '#ffffff' });
            //var timerName = this.game.add.text(this.game.world.width - 170, 0, 'Time Left:', { fill: '#ffffff' });
            var timerName = this.game.add.bitmapText(this.game.world.width - 180, 1, 'nokia16', 'Time Left:');
            this.timerText = this.game.add.text(this.game.world.width - 40, 0, this.countDownTimer.toString(), { fill: '#ffffff' });
            var backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 30, 'homeBtn', Game.GamePlayState.prototype.backToMenu, this);
            backButton.anchor.setTo(0.5);
            this.assetArray = {};
            this.assetArray['sheep_sound'] = '/android_asset/www/Assets/Audio/sheep_sound.ogg';
            this.assetArray['elephant_sound'] = '/android_asset/www/Assets/Audio/elephant_sound.ogg';
            this.assetArray['monkey_sound'] = '/android_asset/www/Assets/Audio/monkey_sound.ogg';
            this.assetArray['horse_sound'] = '/android_asset/www/Assets/Audio/horse_sound.ogg';
            this.assetArray['lion_sound'] = '/android_asset/www/Assets/Audio/lion_sound.ogg';
            this.assetArray['dog_sound'] = '/android_asset/www/Assets/Audio/dog_sound.ogg';
            this.assetArray['cat_sound'] = '/android_asset/www/Assets/Audio/cat_sound.ogg';
            this.assetArray['bear_sound'] = '/android_asset/www/Assets/Audio/bear_sound.ogg';
            this.assetArray['hyena_sound'] = '/android_asset/www/Assets/Audio/hyena_sound.ogg';
            this.assetArray['pelican_sound'] = '/android_asset/www/Assets/Audio/pelican_sound.ogg';
            this.assetArray['owl_sound'] = '/android_asset/www/Assets/Audio/owl_sound.ogg';
            this.assetArray['wolf_sound'] = '/android_asset/www/Assets/Audio/wolf_sound.ogg';
            this.assetArray['tapir_sound'] = '/android_asset/www/Assets/Audio/tapir_sound.ogg';
            this.assetArray['peacock_sound'] = '/android_asset/www/Assets/Audio/peacock_sound.ogg';
            // this.assetArray['pig_sound'] = '/android_asset/www/Assets/Audio/pig_sound.ogg';
            this.assetArray['mouse_sound'] = '/android_asset/www/Assets/Audio/mouse_sound.ogg';
            this.assetArray['frog_sound'] = '/android_asset/www/Assets/Audio/frog_sound.ogg';
            this.assetArray['donkey_sound'] = '/android_asset/www/Assets/Audio/donkey_sound.ogg';
            this.assetArray['cow_sound'] = '/android_asset/www/Assets/Audio/cow_sound.ogg';
            this.assetArray['alligator_sound'] = '/android_asset/www/Assets/Audio/alligator_sound.ogg';
            this.assetArray['correct'] = '/android_asset/www/Assets/Audio/correct.ogg';
            this.assetArray['wrong'] = '/android_asset/www/Assets/Audio/wrong.ogg';
            this.assetArray['gameover'] = '/android_asset/www/Assets/Audio/game_over.ogg';
            this.countDownTimerEvent = this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        };
        GamePlayState.prototype.listener = function (buttonArg) {
            this.playAudio(this.assetArray[this.currentSound], 1.8);
        };
        GamePlayState.prototype.up = function () {
            console.log('button up', arguments);
        };
        GamePlayState.prototype.over = function () {
            console.log('button over');
        };
        GamePlayState.prototype.out = function () {
            console.log('button out');
        };
        GamePlayState.prototype.backToMenu = function () {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
        };
        GamePlayState.prototype.actionOnClick = function (buttonArg) {
            if (buttonArg.name == "button_top") {
                if (this.currentAnimal == this.topAnimal) {
                    this.correctAnswer();
                    if (this.countDownTimer > 2)
                        this.game.time.events.add(Phaser.Timer.SECOND * 1.5, this.reload, this);
                }
                else
                    this.wrongAnswer();
            }
            else {
                if (this.currentAnimal == this.bottomAnimal) {
                    this.correctAnswer();
                    if (this.countDownTimer > 2)
                        this.game.time.events.add(Phaser.Timer.SECOND * 1.5, this.reload, this);
                }
                else
                    this.wrongAnswer();
            }
        };
        GamePlayState.prototype.correctAnswer = function () {
            this.playAudio(this.assetArray['correct'], 1);
            this.score += 10;
            this.scoreText.text = this.score;
            this.showCorrectModal();
        };
        GamePlayState.prototype.wrongAnswer = function () {
            this.playAudio(this.assetArray['wrong'], 1);
            if (this.score > 0)
                this.score -= 10;
            this.scoreText.text = this.score;
            this.showWrongModal();
        };
        GamePlayState.prototype.loadModals = function () {
        };
        GamePlayState.prototype.showCorrectModal = function () {
            this.modalWindow = this.game.add.sprite(0, 0, "correct_sprite");
            this.modalWindow.inputEnabled = true;
            if (this.countDownTimer > 2)
                this.game.time.events.add(Phaser.Timer.SECOND * 1.5, this.removePopup, this);
        };
        GamePlayState.prototype.showWrongModal = function () {
            this.modalWindow = this.game.add.sprite(0, 0, "wrong_sprite");
            this.modalWindow.inputEnabled = true;
            if (this.countDownTimer > 2)
                this.game.time.events.add(Phaser.Timer.SECOND * 1.5, this.removePopup, this);
        };
        GamePlayState.prototype.showGameOverModal = function () {
            this.modalWindow = this.game.add.sprite(0, 0, "gameover_sprite");
            this.modalWindow.inputEnabled = true;
            var finalScoreText = this.game.add.text(this.game.world.centerX, ((3 / 4) * this.game.world.height) - 20, this.scoreText.text, { fill: '#000000' });
            finalScoreText.anchor.setTo(0.5);
            var okBtn = this.game.add.button(this.game.world.centerX, (5 / 6) * this.game.world.height, 'okBtn', Game.GamePlayState.prototype.backToMenu, this);
            okBtn.anchor.setTo(0.5);
        };
        GamePlayState.prototype.removePopup = function () {
            if (this.modalWindow)
                this.modalWindow.destroy();
        };
        GamePlayState.prototype.playAudio = function (src, duration) {
            if (this.currentMedia)
                this.currentMedia.release();
            this.currentMedia = new Media(src, null, this.mediaError);
            this.currentMedia.play();
            var timer = setTimeout(function () { this.currentMedia.release(); }, duration * 1000);
        };
        GamePlayState.prototype.reload = function () {
            var animalsArray = ["elephant", "sheep", "horse", "monkey", "lion", "dog", "cat", "bear", "hyena", "pelican", "owl", "frog",
                "donkey", "cow", "wolf", "tapir", "alligator", "mouse", "peacock"];
            this.topAnimal = Phaser.ArrayUtils.getRandomItem(animalsArray);
            do {
                this.bottomAnimal = Phaser.ArrayUtils.getRandomItem(animalsArray);
            } while (this.topAnimal == this.bottomAnimal);
            var tempArray = [this.topAnimal, this.bottomAnimal];
            this.currentAnimal = Phaser.ArrayUtils.getRandomItem(tempArray);
            this.currentSound = this.currentAnimal + "_sound";
            if (this.buttonBottom)
                this.buttonBottom.destroy();
            if (this.buttonTop)
                this.buttonTop.destroy();
            if (this.soundButton)
                this.soundButton.destroy();
            this.buttonTop = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 80 + 50 - 20, this.topAnimal, Game.GamePlayState.prototype.actionOnClick, this);
            this.buttonTop.name = 'button_top';
            this.buttonTop.anchor.setTo(0.5);
            this.buttonBottom = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 80 + 50 - 20, this.bottomAnimal, Game.GamePlayState.prototype.actionOnClick, this);
            this.buttonBottom.name = 'button_bottom';
            this.buttonBottom.anchor.setTo(0.5);
            this.soundButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 125 - 30 - 10, 'playButton', Game.GamePlayState.prototype.listener, this);
            this.soundButton.name = 'playButton';
            this.soundButton.anchor.setTo(0.5);
            this.buttonTween(this.soundButton, 2000);
        };
        GamePlayState.prototype.updateTimer = function () {
            this.timerText.text = this.countDownTimer.toString();
            if (this.countDownTimer <= 5) {
                this.timerText.fill = '#ff0000';
            }
            if (this.countDownTimer == 0) {
                if (this.modalWindow)
                    this.removePopup;
                this.playAudio(this.assetArray['gameover'], 1.0);
                this.showGameOverModal();
                this.game.time.events.remove(this.countDownTimerEvent);
            }
            else
                this.countDownTimer -= 1;
        };
        GamePlayState.prototype.buttonTween = function (arg, delay) {
            var tween = this.add.tween(arg.scale).to({ x: 0.9, y: 0.9 }, 1500, "Linear", true, 0, -1);
            tween.yoyo(true, delay);
        };
        GamePlayState.prototype.updateTimerText = function () {
        };
        GamePlayState.prototype.mediaError = function () {
        };
        return GamePlayState;
    })(Phaser.State);
    Game.GamePlayState = GamePlayState;
})(Game || (Game = {}));
//# sourceMappingURL=GamePlayState.js.map