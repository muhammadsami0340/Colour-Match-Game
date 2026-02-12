var scoreDiv = document.getElementById("score");
var wrongDiv = document.getElementById("wrong");
var targetDiv = document.getElementById("aim");
var boardDiv = document.getElementById("action");
var colors = ['red','blue','yellow','green','orange','aqua','brown','pink','purple','grey'];
var score = 0;
var wrongClicks = 0;
var targetColor = "";
// inital assign to score span
scoreDiv.innerText = score;
wrongDiv.innerText = wrongClicks;
// to generate the random color
function randomColor(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function boxClickHandler(event){
    // assign color to the match box div
    var targetDiv = event.target.style.backgroundColor;
    /// to check the color of match box and the targeted div (the clicked one)
    if(targetDiv === targetColor){
        score++;
    } else {
        wrongClicks++;
        wrongDiv.innerText = wrongClicks; 
    }
    if(wrongClicks === 3){
        alert("Focus On Goal Not H***");
        score = 0;
        wrongClicks = 0;
        scoreDiv.innerText = score;
        wrongDiv.innerText = wrongClicks;
        game();
        return;
    }
    scoreDiv.innerText = score;
    game();
}
function game(){
    boardDiv.innerHTML = "";
    targetColor = randomColor();
    targetDiv.style.backgroundColor = targetColor;
    var index = Math.floor(Math.random() * 34);
    for (var i = 0; i <= 34; i++){

        var divElm = document.createElement("div");
        divElm.className = "boxes";
        if(i === index){
            divElm.style.backgroundColor = targetColor;
        } else {
            divElm.style.backgroundColor = randomColor();
        }
        // onclick event assign
        divElm.addEventListener("click", boxClickHandler);
        boardDiv.appendChild(divElm);
    }
}
game();