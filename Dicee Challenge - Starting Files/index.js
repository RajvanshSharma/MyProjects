let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let heading = document.querySelector("h1");

let randomImg = "images/dice" + randomNumber + ".png";
let randomImg2 = "images/dice" + randomNumber2 + ".png";


img1.setAttribute("src" , randomImg);
img2.setAttribute("src", randomImg2);

if(randomNumber > randomNumber2){
    heading.innerHTML = "Player 1 wins";
}
else if(randomNumber < randomNumber2){
    heading.innerHTML = "Player 2 wins";
}
else{
    heading.innerHTML = "Draw";
}



