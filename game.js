let canvas; //global canvas
let context; //global context

//check for dom content loaded and add a click event to all class square elements
document.addEventListener('DOMContentLoaded', () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    const square = document.querySelectorAll('.square')

    square.forEach(id => {
        id.addEventListener('click', checkHit)
    })

})

let turn = -1;

//player array for player 1 updated at each click event when turn%2 == 0
const player1array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                        20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
                        40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
                        60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89]

//player array for player 1 updated at each click event when turn%2 == 0
const player2array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                        20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
                        40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
                        60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89]

//updates player array when a click event happens NOTE: will eventually be used to print to the screen where hits/misses/empty spaces are
function checkHit () {
    turn++;
    console.log(this)
    if(turn % 2 == 0){
        console.log("player 1 turn\n")
        player1array[this.id] = 'hit'
        console.log(player1array)
    }
    else{
        console.log("player 2 turn\n")
        player2array[this.id] = 'hit'
        console.log(player2array)
    }
}

//Draws that current animation frame in according to what it tells to print
function draw() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    tick();
}

//Requests the current animation frame
function tick() {
    window.requestAnimationFrame(draw);
}
