
var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 720,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene:[Menu,Creditos,GameOver,level1,level2]

};

var game = new Phaser.Game(config);

var Senora;
var Fondo;
var Musica;
var Amigo;
var Reloj;
var Hoja;
var Fantasma;
var Pison;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var initialTime = 0;
var timedEvent;
var chek;
var timeText;


