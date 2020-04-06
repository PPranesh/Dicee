// to get the values 1~6
var randomNumber1 = (Math.floor((Math.random()*6)+1));  
var randomNumber2 = (Math.floor((Math.random()*6)+1));

// concatinating with the resources
document.querySelector(".dice .img1").setAttribute("src","/Dicee/images/dice"+randomNumber1+".png");
document.querySelector(".dice .img2").src = "/Dicee/images/dice"+randomNumber2+".png";

// comparing the results
if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🚴🏻‍♂️";
} else if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "🚴🏻‍♂️ Player 1 Wins!";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "🚴🏻‍♂️ Draw! 🚴🏻‍♂️ ";
}
