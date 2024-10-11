var n1 = (Math.floor(Math.random()*6))+1;
var n2 = (Math.floor(Math.random()*6))+1
if (n1 > n2) {
    document.querySelector("h1").innerText = "Player 1 Wins!" 
} else if (n1 < n2) {
    document.querySelector("h1").innerText = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerText = "Draw!"
}
document.querySelector(".img1").src = "images/dice"+n1+".png"
document.querySelector(".img2").src = "images/dice"+n2+".png"


