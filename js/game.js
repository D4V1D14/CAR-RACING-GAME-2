class Game {
    constructor() {}
      getState(){
          var gamestateref=database.ref("gameState")
          gamestateref.on("value",function(data){
              gameState=data.val()
          })

    
          
      }
      update(state){
          database.ref("/").update({
              gameState:state
          })
      }
    async  start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount=playerCountref.val()
            
            player.getCount()
            }
            form=new Form()
            form.display()
        
    }
CAR1=createSprite(900,200)
CAR1.addImage(CAR1image)

CAR2=createSprite(900,200)
CAR2.addImage(CAR2image)

CAR3=createSprite(900,200)
CAR3.addImage(CAR3image)
cars=[CAR1,CAR2,CAR3]
    }
    play(){
        form.hide()
Player.getPlayerinfo()
if (allplayers!==undefined){
    image(track,0,0,1000,1000)

    var index = 0;

    var x = 800 ;
    var y;

    index = index + 1 ;
    x = x + 200;
    y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y; 
}

    }
}