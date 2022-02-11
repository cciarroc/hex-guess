// create color array
// select each square div
// pull x number of random colors using math random and array index
// add random colors to a new array and pick one random one from that array
// display that color hex number or RGB in a div
// loop through the array to assign to div squares
// event listeners to click each square
// if / then statements for if background matches chosen color
// start with 3 squares -- can make a "hard" page with more squares later
// #0000ff is blue | #ff00ff is pink | #33cc33 is green


const chosenColor = document.querySelector(".chosen-color h2");
const colorSquares = document.querySelectorAll(".square"); //returns as an array
const newColorBtn = document.querySelector("#new-color-btn");

let colorArray = ["#33ccad", "#ff9999", "#99ff99", "#009999", "#7b9d7b", "#9d9d7b", "#f5873d", "#9d7b7b", "#0080ff", "#d98cb3", "#732673", "#ffe6ff", "#99cc00", "#99b3e6", "#a32947", "#705c61"];
let gameColors = [];

//Assign random colors to squares

function gameSetup(){
    colorSquares.forEach((square)=>{
        let randomColorIndex = Math.floor(Math.random()*colorArray.length);
        let randomColor = colorArray[randomColorIndex];
        square.style.backgroundColor = randomColor;
        gameColors.push(randomColor); // so that random game color can be pulled from array
        colorArray.splice(randomColorIndex, 1);
        console.log(gameColors);
    })
}

var guessTheColor;

function guessColor(){
    let randomGameColorIndex = Math.floor(Math.random()*gameColors.length);
    guessTheColor = gameColors[randomGameColorIndex];
    chosenColor.innerText = guessTheColor.toUpperCase();
    console.log(guessTheColor);
    return guessTheColor;
}

gameSetup();
// console.log(gameColors);
guessColor()






//Pull information from square clicked & compare to the hex code


colorSquares.forEach(function(square){
    square.addEventListener("click", function(){
        let clickedColor = rgba2hex(square.style.backgroundColor);
        if (clickedColor === guessTheColor){
            chosenColor.innerText = "Winner!";
        }else{
            document.getElementById(square.id).style.backgroundColor = "#b3b3b3";
            }
        })
    })





// New colors

newColorBtn.addEventListener("click", function(){
    gameColors = [];
    colorArray = ["#33ccad", "#ff9999", "#99ff99", "#009999", "#7b9d7b", "#9d9d7b", "#f5873d", "#9d7b7b", "#0080ff", "#d98cb3", "#732673", "#ffe6ff", "#99cc00", "#99b3e6", "#a32947", "#705c61"];
    gameSetup();
    guessColor();
})





//RGB to Hexidecimal


// function colorToHex(color){
//     var hexadecimal = color.toString(16); //toString method converts number to string | parameter of 16 is base numeral system for hexadecimals
//     return hexadecimal.length == 1 ? "0" +hexadecimal: hexadecimal; //ternary operator! condition (1) before the ?, then the two expressions separated by (:) || if condition is true, first expression executes, if false, the second
// }

// function rgbToHex(red, green, blue){
//     return "#" + colorToHex(red)+colorToHex(green)+colorToHex(blue);
// }

const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
// regular expression to get each digit inside the rgb string 
