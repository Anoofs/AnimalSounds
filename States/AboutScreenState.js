var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game;
(function (Game) {
    var AboutScreenState = (function (_super) {
        __extends(AboutScreenState, _super);
        function AboutScreenState() {
            _super.call(this);
        }
        AboutScreenState.prototype.create = function () {
            this.bgSprite = this.game.add.sprite(0, 0, "about_sprite");
            var backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 30, 'homeBtn', Game.GamePlayState.prototype.backToMenu, this);
            backButton.anchor.setTo(0.5);
        };
        AboutScreenState.prototype.backToMenu = function () {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, true);
        };
        return AboutScreenState;
    })(Phaser.State);
    Game.AboutScreenState = AboutScreenState;
})(Game || (Game = {}));
//# sourceMappingURL=AboutScreenState.js.map