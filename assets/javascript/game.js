 //setting global variables

 var targetNumber = 0;
 var counter = 0;
 var wins = 0;
 $("#wins").text(wins);
 var losses = 0;
 $("#losses").text(losses);

 //this function will set the game, pick random number, pick and assign random numbers for each crystal
 function setGame() {

     targetNumber = Math.floor(Math.random() * 120) + 19;
     var crystalValue1 = Math.floor(Math.random() * 12) + 1;
     var crystalValue2 = Math.floor(Math.random() * 12) + 1;
     var crystalValue3 = Math.floor(Math.random() * 12) + 1;
     var crystalValue4 = Math.floor(Math.random() * 12) + 1;
     $("#randomNum").text(targetNumber);

     counter = 0;
     $("#scores").text(counter);

     $("#crys1").attr("value", crystalValue1);
     $("#crys2").attr("value", crystalValue2);
     $("#crys3").attr("value", crystalValue3);
     $("#crys4").attr("value", crystalValue4);

     console.log(crystalValue1);
 }
 setGame();
 
 //creating on click event that would adjust user's score based on the value of the crystal he pressed, check if total user's score matches random number that was picked. if it does - display winning alert, update wins to wins++ and reset the game; if it doesen't match - will update losses, display appropriate alert and reset the game;

 $(".crystal").on("click", function () {

     counter += parseInt($(this).attr("value"));
     $("#scores").text(counter);


     if (counter === targetNumber) {
         alert("You win!");
         wins++;
         $("#wins").text(wins);
         setGame();

     } else if (counter >= targetNumber) {
         alert("You lose!!");
         losses++;
         $("#losses").text(losses);
         setGame();
     }

 });
