class Quiz {
    constructor(){
        
    }
    
    getState(){
       var gameStateRef = database.ref('gameState');
       gameStateRef.on("value",function(data)
       {
           gameState = data.val();
       });
    }
    update(state){
        database.ref('/').update(
            {
                gameState: state
            });
    }

    async start(){
    if(gameState ===0){
        text ("*PLEASE WAIT FOR OTHERS TO JOIN*",330,70);
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists())
        {
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question()
        question.display();
        
    }

    }
    play(){
        question.hide();
        background("lightgreen");
        Contestant.getContestantInfo();
        textSize(30);
        text("Result of the quiz",340,50);
        if(allContestants !== undefined){
          var display_position = 230;
        text("the contestants with correct answer are in green colour",130,230);
          //index of the array
         
    
          for(var plr in allContestants){
            //add 1 to the index for every loop
          var ca="2";
    
          if(ca === allContestants[plr].answer){
              fill("green");
          }
          else{
              fill("red");
          }
           display_position+=30;
           textSize(15);
           text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_position)
          }
    
        }
    
        
      }
   
}
