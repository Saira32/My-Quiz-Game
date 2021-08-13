class Quiz {
  constructor(

  ){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    
    
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
    this.result = createElement('h1')
    this.result.html("MyQuiz Game");
    this.result.position(350, 0);
    //call getContestantInfo( ) here
      Contestant.getContestantInfo();

    //write condition to check if contestantInfo is not undefined

    if (allContestants !== undefined){
      var display_answers =230
      fill("Blue");
      textSize(20);
      text("*NOTE: The Contestant that answerd correctly are highlighted in green",130,230)
    }
  
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2"
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else 
        fill("Red")

        display_answers +=20
        textSize(20)
        text(allContestants[plr].name + ":  " + allContestants[plr].answer,250, display_answers)
      
    }

    
    

}
}