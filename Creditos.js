class  Creditos extends Phaser.Scene{
    constructor(){
        super("Creditos")
    }
     
    create (){

        this.add.text(500,100, 'Desarrollador',{ fontSize: '60px', fill: '#99b6f2', fontFamily: 'arial' })
        this.add.text(500,200, 'Julian Cravero',{ fontSize: '50px', fill: '#99b6f2', fontFamily: 'arial' })
        this.add.text(10,600, 'Atras',{ fontSize: '50px', fill: '#99b6f2', fontFamily: 'arial' }).setInteractive().on('pointerdown',()=>this.scene.start('Menu'));

    }

}