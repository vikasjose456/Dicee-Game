var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*5) + 1;

var randDiceImage1 = "dice"+randomNumber1+".png";
var randDiceImage2 = "dice"+randomNumber2+".png";

var imageLoc1 = "./images/"+randDiceImage1;
var imageLoc2 = "./images/"+randDiceImage2;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", imageLoc1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", imageLoc2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if (randomNumber2>randomNumber1){ 
    document.querySelector("h1").innerHTML= "Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}