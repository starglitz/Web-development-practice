var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  userClickedPattern = [];
  var randomNumber = (Math.random() * 4) | 0;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

//randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.





// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);


 // Use jQuery to select the button with the same id as the randomChosenColour
// for (var i = 0; i < $("button").length; i++) {
//   if(i.id == randomChosenColor) {
//
//   }
//   $("button")[i]
// }



$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

  // checkAnswer(userClickedPattern.length-1);
});



function animatePress(buttonId) {
  $("#" + buttonId).fadeOut(100).fadeIn(100);
}

function playSound(buttonId) {
  var sound = new Audio("sounds/" +buttonId +".mp3");
  sound.play();
}

$(document).keypress(function(keyPress) {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $("body"). addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}

function startOver() {
//   Call startOver() if the user gets the sequence wrong.
//
// 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 1;
  gamePattern = [];
  userClickedPattern = [];

}
