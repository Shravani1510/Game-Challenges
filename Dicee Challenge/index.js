
// var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png" ];
// var numberOfImages = images.length;
// var randomDicePosition = Math.floor(Math.random()*numberOfImages);
// var randomDice1 = images[randomDicePosition];
// var randomNumber1= document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
// var image = ["images/dice6.png","images/dice5.png","images/dice4.png","images/dice3.png","images/dice2.png","images/dice1.png" ];
// var numberOfImages = image.length;
// var randomDice2 = image[randomDicePosition];
// var randomNumber2= document.querySelectorAll("img")[1].setAttribute("src", randomDice2);
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var dice1 = ("images/dice"+randomNumber1+".png");
var dice2 = ("images/dice"+randomNumber2+".png");

document.querySelectorAll("img")[0].setAttribute("src", dice1);
document.querySelectorAll("img")[1].setAttribute("src", dice2);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩player 1 wins!";
}else{
    document.querySelector("h1").textContent = "player 2 wins!🚩";
}
//🚩
