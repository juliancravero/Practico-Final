class  GameOver extends Phaser.Scene{
    constructor(){
        super("GameOver")
    }
     
    create (){

        this.add.text(500,100, 'Game Over',{ fontSize: '60px', fill: '#99b6f2', fontFamily: 'arial' })
        this.add.text(500,200, 'Volver a intentar',{ fontSize: '50px', fill: '#99b6f2', fontFamily: 'arial' }).setInteractive().on('pointerdown',()=>this.scene.start('level1'));
        this.add.text(500,300, 'Menu',{ fontSize: '50px', fill: '#99b6f2', fontFamily: 'arial' }).setInteractive().on('pointerdown',()=>this.scene.start('Menu'));

    }

}