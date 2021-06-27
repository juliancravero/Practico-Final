class  Menu extends Phaser.Scene{
    constructor(){
        super("Menu")
    }

    preload ()
    {
        this.load.image('Fondo', 'assets/Fondo.png');
        this.load.image('Piso', 'assets/Piso.png');
        this.load.image('Hoja', 'assets/Hoja.png');
        this.load.image('nube 1', 'assets/nube 1.png');
        this.load.image('nube 2', 'assets/nube 2.png');
        this.load.image('Amigo', 'assets/Amigo.png');
        this.load.image('Menu', 'assets/Menu.png');
        this.load.image('Reloj', 'assets/Reloj.png');
        this.load.image('luna', 'assets/luna.png');
        this.load.image('Fantasma', 'assets/Fantasma.png');
        this.load.audio('Cancion 1', 'assets/Cancion 1.wav');
        this.load.spritesheet('Senora', 'assets/Señora.png', { frameWidth: 2000, frameHeight: 1882 });
    }

    create (){

        this.add.image(0,0, 'Menu').setOrigin(0,0)

        this.add.text(500,300, 'Jugar',{ fontSize: '40px', fill: '#99b6f2', fontFamily: 'arial' }).setInteractive().on('pointerdown',()=>this.scene.start('level1'));
        this.add.text(500,400, 'Creditos',{ fontSize: '40px', fill: '#99b6f2', fontFamily: 'arial' }).setInteractive().on('pointerdown',()=>this.scene.start('Creditos'));

    }


}

