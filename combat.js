let square = document.querySelectorAll('.square')
let combat_turn = 0;
let game_over = true
let game_over2 = true

//just the starting function for the combat class that adds the click events to each div
function start_combat() {
    square.forEach(id => {
        id.addEventListener('click', checkFlip)
    })
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
    combat_turn++
    check_game_over_player_1()
    check_game_over_player_2()
}


//Function to check if game is over
function check_game_over_player_1() {
    console.log(player2array)
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
    console.log(player1array)
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