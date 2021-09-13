class Form {
    constructor() {
      this.input=createInput("name")
      this.button=createButton("play")
      this.greeting=createElement("h2")
      this.title=createElement("h2")
      this.reset=createButton("reset")
    }
    hide (){
      this.greeting.hide()
      this.button.hide()
      this.input.hide()
      this.title.hide()

    }
  
    display(){
      
      this.title.html("Car Racing Game");
      this.title.position(100, 0);
      
     this.input.position(500, 500);
     this.button.position(700,700);
     this.reset.position(900,20)
      this.button.mousePressed(()=>{
        this.input.hide();
       this.button.hide();
  
        player.name =this.input.value();
        
        playerCount+=1;
        player.index=playerCount
        player.update()
        player.updateCount(playerCount);
       this.greeting.html("Hello " + player.name )
        this.greeting.position(700, 50)
      });
  this.reset.mousePressed(()=>{
    player.updateCount(0)
    game.update(0)

  })
    }
  }