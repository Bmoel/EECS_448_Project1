let square = document.querySelectorAll('.square')
let combat_turn = 0;
let game_over = true
let game_over2 = true

//just the starting function for the combat class that adds the click events to each div
function start_combat() {
    square.forEach(id => {
        id.addEventListener('click', checkFlip)
    })
    buffer()
    console.log("called buffer")
}

//this function will check if the player's array has a ship or a blank space at a given index and append a picture to the div depending
function checkFlip () {
    if(combat_turn%2==0){
        if(player1array[this.id] == 'ship'){
            player1array[this.id] = 'hit'
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(this.id).innerHTML = ''
            document.getElementById(this.id).appendChild(image)
        }
        else{
            player1array[this.id] = 'miss'
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(this.id).innerHTML = ''
            document.getElementById(this.id).appendChild(image)
        }
    }
    else{
        if(player2array[this.id - 90] == 'ship'){
            player2array[this.id-90] = 'hit'
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(this.id).innerHTML = ''
            document.getElementById(this.id).appendChild(image)
        }
        else{
            player2array[this.id - 90] = 'miss'
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(this.id).innerHTML = ''
            document.getElementById(this.id).appendChild(image)
        } 
    }
    check_game_over_player_1()
    check_game_over_player_2()
}

function showPlayer1board() {
    for(let i = 0; i < 90; i++) {
        if(player2array[i] == 'hit'){
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(i+90).innerHTML = ''
            document.getElementById(i+90).appendChild(image)
        }
        else if (player2array[i] == 'miss') {
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(i+90).innerHTML = ''
            document.getElementById(i+90).appendChild(image)
        }
        else {
            var image = document.createElement('img')
            image.src = 'images/team10.png'
            document.getElementById(i+90).innerHTML = ''
            document.getElementById(i+90).appendChild(image)
        }
    }
}

function showPlayer1ships() {
    console.log("in player 1 ships")
    for (let i = 0; i<90; i++) {
        if(player1array[i] == 'hit'){
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player1array[i] == 'miss') {
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player1array[i] == 'ship'){
            var image = document.createElement('img')
            image.src = 'images/ship.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else {
            var image = document.createElement('img')
            image.src = 'images/blank.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
    }

    combat_turn++

    player_two_turn_button = document.createElement("player_two_turn_button");
    player_two_turn_button.innerHTML = "player two turn";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(player_two_turn_button);

    player_two_turn_button.addEventListener("click", () => {
        buffer()
        body.removeChild(player_two_turn_button)
    })
} 

function showPlayer2board() {
    console.log("player 2 board")
    for (let i = 0; i<90; i++) {
        if(player1array[i] == 'hit'){
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player1array[i] == 'miss') {
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else {
            var image = document.createElement('img')
            image.src = 'images/team10.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
    }
}

function showPlayer2Ships() {
    console.log("in player 2 ships")
    for (let i = 90; i<180; i++) {
        if(player2array[i-90] == 'hit'){
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player2array[i-90] == 'miss') {
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player2array[i-90] == 'ship'){
            var image = document.createElement('img')
            image.src = 'images/ship.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else {
            var image = document.createElement('img')
            image.src = 'images/blank.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
    }

    combat_turn++

    player_one_turn_button = document.createElement("player_one_turn_button");
    player_one_turn_button.innerHTML = "Player One's Turn";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(player_one_turn_button);

    player_one_turn_button.addEventListener("click", () => {
        buffer()
        body.removeChild(player_one_turn_button)
    })

}

function buffer() {
    for(let i = 0; i < 90; i++)
    {
            var image = document.createElement('img')
            image.src = 'images/team10.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
    }
    
    for(let i = 90; i< 180; i++){
            var image = document.createElement('img')
            image.src = 'images/team10.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }

    leave_buffer_button = document.createElement("leave_buffer_button");
    leave_buffer_button.innerHTML = "Leave Buffer";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(leave_buffer_button);

    leave_buffer_button.addEventListener("click", () => {
        if(combat_turn%2 == 0){
            showPlayer1board()
            showPlayer1ships()
        }
        else {
            showPlayer2Ships()
            showPlayer2board()
        }
        body.removeChild(leave_buffer_button)
    })
}

//Function to check if game is over
function check_game_over_player_1() {
    game_over = true
    for(let i = 0; i < 90; i++){
        if(player1array[i] == 'ship'){
            game_over = false
        }
    }
    if(game_over){
        alert("Game over! Player 2 wins! Refresh to play again")
    }

}

//Function to check if game is over
function check_game_over_player_2() {
    game_over2 = true
    for(let i = 0; i < 90; i++){
        if(player2array[i] == 'ship'){
            game_over2 = false
        }
    }
    if(game_over2){
        alert("Game over! Player 1 wins! Refresh to play again")
    } 

}