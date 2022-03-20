//This is a comment
//detecting button press
var buttons = document.querySelectorAll(".drum");
for(var i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  //  this.style.color = "white";
  });
}

//detecting keyboard press
document.addEventListener("keypress",function(){
  makeSound(event.key);
  buttonAnimation(event.key);
  //console.log(event);
});


function makeSound(key){
  switch (key) {
    case "w":
    var tom1= new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var tom4= new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "d":
    var crash= new Audio("sounds/crash.mp3");
     crash.play();
    break;
    case "j":
    var tom2= new Audio("sounds/tom-2.mp3");
     tom2.play();
    break;
    case "k":
    var tom3= new Audio("sounds/tom-3.mp3");
     tom3.play();
    break;
    case "l":
   var snare= new Audio("sounds/snare.mp3");
    snare.play();
    break;
    default: console.log(key);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
}
//document.querySelectorAll("button")[0].addEventListener("click", handleClick);

// function handleClick(){
//   alert("I got clicked!");
// }
//alert("I got clicked!");
// var audio= new Audio("sounds/tom-1.mp3");
// audio.play();
