// for checking jquery
//$("h1");
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var toggle = false;
//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);
});


function nextSequence() {
  userClickedPattern = [];
  level++;
    $("#level-title").text("Level " + level);
//  console.log(level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

  playSound(randomChosenColor);
  //animatePress(randomChosenColor);
}


// 1. In the same way we played sound in nextSequence() , when a user clicks on a button,
// the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.
// 2. Create a new function called playSound() that takes a single input parameter called name.
// 3. Take the code we used to play sound in the nextSequence() function and move it to playSound().
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
// 4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
//adding animation to clicks

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// 2. Take a look inside the styles.css file, you can see there is a class called "pressed",
// it will add a box shadow and changes the background colour to grey.
function animatePress(currentColour) {
  var activeButton = $("." + currentColour);
  activeButton.addClass("pressed");
  //   3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  // 4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function() {
    activeButton.removeClass("pressed");
  }, 100);
}

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
/*AWAIT KEYPRESS TO BEGIN GAME*/
$(document).keypress(function() {
  if (!toggle) {
    $("#level-title").text("Level " + level);
    nextSequence();
    toggle = true;
  }
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// 2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
// e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.
// 3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern.
// If so then log "success", otherwise log "wrong".
// You can now use these log statements along with logging the values of userClickedPattern and gamePattern
//  in the Chrome Developer Tools console to check whether
// if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    //4.if the userClickedPattern and the gamePatterns lengths are equal, call nextSequence()
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
        //update the titles level indicator
        $("#level-title").text("Level: " + level);
      }, 1000);
    }
  } else {
    //play sound for incorrect click
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    //console.log("wrong");
    startOver();
  }
}
// reset
function startOver() {
    var level = 0;
    var gamePattern = [];
    var toggle = false;
}
