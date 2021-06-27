class  level1 extends Phaser.Scene{
    constructor(){
        super("level1")
    }

    

     create ()
    {
        //  Fondo
        Fondo = this.add.image(0, 0, 'Fondo').setOrigin(0,0).setScrollFactor(0.07);
        this.add.image(700,150,'luna').setScrollFactor(0.1).setScale(0.2);
        this.add.image(400,200,'nube 1').setScrollFactor(0.2).setScale(0.2);
        this.add.image(950,250,'nube 2').setScrollFactor(0.25).setScale(0.2);
        this.add.image(850,200,'nube 1').setScrollFactor(0.18).setScale(0.2);
        this.add.image(500,220,'nube 2').setScrollFactor(0.05).setScale(0.2);


        //  
        Pison = this.physics.add.staticGroup();

        Pison.create(400, 680, 'Piso').setScale(3,0.5).refreshBody();

        Pison.create(1700, 450, 'Piso').setScale(0.3,0.5).refreshBody();
        Pison.create(2200, 240, 'Piso').setScale(0.3,0.5).refreshBody();
        Pison.create(0, 300, 'Piso').setScale(0.3,0.5).refreshBody();;

        Reloj = this.physics.add.staticGroup();

        Reloj.create(1750, 580, 'Reloj').setScale(0.3).refreshBody();

        Senora = this.physics.add.sprite(100, 450, 'Senora').setScale(0.1).refreshBody().setSize(800,1700);

        //  Animaciones de la señora
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Senora', { start: 2, end: 0  }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Senora', { start: 2 , end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();

        Hoja = this.physics.add.group({
            key: 'Hoja',
            repeat: 25,
            setXY: { x: 12, y: 0, stepX: 140 }
        });

        Hoja.children.iterate(function (child) {
                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                child.setScale(0.05)
                
            });
        
        this.cameras.main.setBounds(0,0,Fondo.displayWidth,0);
        this.cameras.main.startFollow(Senora);

        Musica = this.sound.add('Cancion 1');
        Musica.loop = true;
        Musica.play();
        //  Puntos
        scoreText = this.add.text(10, 10, 'Puntos: 0', { fontSize: '40px', fill: '#99b6f2', fontFamily: 'arial' }).setScrollFactor(0);

        initialTime = 30;
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(750, 10, 'Tiempo: '+initialTime, { fontSize: '40px', fill: '#99b6f2', fontFamily: 'arial' }).setScrollFactor(0);
    
        //  Collides
        this.physics.add.collider(Senora, Pison);

        this.physics.add.collider(Hoja, Pison);

        this.physics.add.overlap(Reloj, Senora, this.collectReloj, null, this);

        this.physics.add.overlap(Senora, Hoja, this.collectHoja, null, this);

    }

     update ()
    {

        if (cursors.left.isDown)
        {
            Senora.setVelocityX(-160);

            Senora.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            Senora.setVelocityX(160);

            Senora.anims.play('right', true);
        }
        else
        {
            Senora.setVelocityX(0);

            Senora.anims.play('turn');
        }

        if (cursors.up.isDown && Senora.body.touching.down)
        {
            Senora.setVelocityY(-500);
        }
    }

     collectHoja (Senora, Hoja)
    {
        Hoja.disableBody(true, true);

        score += 50;
        scoreText.setText('Puntos: ' + score);

        if (score == 1200)
        {
            this.scene.start("level2");
        }
    }

    onSecond(){
        initialTime = initialTime - 1;
        timeText.setText('Tiempo: '+initialTime);
        if(initialTime == 0){

        this.scene.start('GameOver');

        score=0;

        }
    }   
    
    collectReloj (Senora, Reloj)
    {
        Reloj.disableBody(true, true);
        initialTime = initialTime + 20;
        timeText.setText('Tiempo: '+initialTime);
    }
}