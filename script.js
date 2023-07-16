const img1 = document.querySelectorAll("img")[0];
const img2 = document.querySelectorAll("img")[1];
const heading2 = document.querySelector("h2");

var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;

console.log(randomNum1);
console.log(randomNum2);

var randomDiceImage1 = "Dicey-" + randomNum1 + ".png";
var randomDiceImage2 = "Dicey-" + randomNum2 + ".png";

img1.setAttribute("src",randomDiceImage1);
img2.setAttribute("src",randomDiceImage2); 

if(randomNum1<randomNum2)
{
    heading2.innerHTML = "Player 2 wins 🏴";
}
else if(randomNum2<randomNum1)
{
    heading2.innerHTML = "Player 1 wins 🏴";
}
else{
    heading2.innerHTML = "Draw 🚀";
}