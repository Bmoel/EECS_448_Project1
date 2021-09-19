let in_combat = false;
let square = document.querySelectorAll('.square')
let combat_turn = 0;
let game_over = true
let game_over2 = true
let in_buffer = false
let player_1_turn = false
let player_2_turn = false
let click = false

//arrays to track player 1's hits on a given target
let p1_1 = []
let p1_2 = []
let p1_3 = []
let p1_4 = []
let p1_5 = []
let p1_6 = []

//arrays to track player 2's hits on a given target
let p2_1 = []
let p2_2 = []
let p2_3 = []
let p2_4 = []
let p2_5 = []
let p2_6 = []

/**
        * @author blake richmeier
        * @version 2
        * the first function called by boat_selection.js to start the combat phase
        */
function start_combat() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    print_board2()
    square.forEach(id => {
        id.addEventListener('click', checkFlip)
    })
    console.log("should be gone")
    buffer()
    console.log("called buffer")
}

/**
        * @author blake richmeier
        * @version 10
        * this function will check if the player's array has a ship or a blank
        * space at a given index and append a picture to the div depending
        * it has an iterator for checking what player's turn it is and also had to add a function that
        * pushes a char 'a' onto an array whenever there is a hit on a certain length ship that is used for checking
        * if a ship is sunk also has guards for misplaced clicks
        * @return after a click event on leave_player2_button it will call buffer()
        */
function checkFlip() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    print_board2()
    if (!in_buffer && click == false) {
        if (player_2_turn) {
            if (this.id <= 89) {
                if (player1array[this.id] == 'ship') {

                    player1array[this.id] = 'hit'

                    if (player_ships_placed.player1.charAt(parseInt(this.id)) == 1) {
                        p1_1 = p1_1 + 'a'
                        console.log(p1_1)
                    }
                    else if (player_ships_placed.player1.charAt(parseInt(this.id)) == 2) {
                        p1_2 = p1_2 + 'a'
                        console.log(p1_2)
                    }
                    else if (player_ships_placed.player1.charAt(parseInt(this.id)) == 3) {
                        p1_3 = p1_3 + 'a'
                        console.log(p1_3)
                    }
                    else if (player_ships_placed.player1.charAt(parseInt(this.id)) == 4) {
                        p1_4 = p1_4 + 'a'
                        console.log(p1_4)
                    }
                    else if(player_ships_placed.player1.charAt(parseInt(this.id)) == 5){
                        p1_5 = p1_5 + 'a'
                        console.log("p1_6", p1_5)
                    }
                    else if(player_ships_placed.player1.charAt(parseInt(this.id)) == 6){
                        p1_6 = p1_6 + 'a'
                        console.log("p1_6", p1_6)
                    }

                    var image = document.createElement('img')
                    image.src = 'images/fire.png'
                    document.getElementById(this.id).innerHTML = ''
                    document.getElementById(this.id).appendChild(image)
                    console.log("here1")
                }
                else if (player1array[this.id] == 'sunk') {
                    var image = document.createElement('img')
                    image.src = 'images/sunken.png'
                    document.getElementById(this.id).innerHTML = ''
                    document.getElementById(this.id).appendChild(image)
                }
                else {
                    player1array[this.id] = 'miss'
                    var image = document.createElement('img')
                    image.src = 'images/water.png'
                    document.getElementById(this.id).innerHTML = ''
                    document.getElementById(this.id).appendChild(image)
                }
                click = true
                document.getElementById(this.id).removeEventListener("click", checkFlip)
            }
            else {
                context.clearRect(600, 100, 100, 100)
                context.fillText("You can only interact with", 695, 150);
                context.fillText("the opposing board", 725, 175);
                console.log("here3")
            }
        }
        else if (player_1_turn) {
            if (this.id > 89) {
                if (player2array[this.id - 90] == 'ship') {

                    player2array[this.id - 90] = 'hit'

                    if (player_ships_placed.player2.charAt(parseInt(this.id) - 90) == 1) {
                        p2_1 = p2_1 + 'a'
                        console.log(p2_1)
                    }
                    else if (player_ships_placed.player2.charAt(parseInt(this.id) - 90) == 2) {
                        p2_2 = p2_2 + 'a'
                        console.log(p2_2)
                    }
                    else if (player_ships_placed.player2.charAt(parseInt(this.id) - 90) == 3) {
                        p2_3 = p2_3 + 'a'
                        console.log(p2_3)
                    }
                    else if (player_ships_placed.player2.charAt(parseInt(this.id) - 90) == 4) {
                        p2_4 = p2_4 + 'a'
                        console.log(p2_4)
                    }
                    else if(player_ships_placed.player2.charAt(parseInt(this.id)-90) == 5){
                        p2_5 = p2_5 + 'a'
                        console.log(p2_5)
                    }
                    else if(player_ships_placed.player2.charAt(parseInt(this.id)-90) == 6){
                        p2_6 = p2_6 + 'a'
                        console.log(p2_6)
                    }

                    var image = document.createElement('img')
                    image.src = 'images/fire.png'
                    document.getElementById(this.id).innerHTML = ''
                    document.getElementById(this.id).appendChild(image)
                    console.log("here4")
                }
                else if (player2array[this.id - 90] == 'sunk') {
                    var image = document.createElement('img')
                    image.src = 'images/sunken.png'
                    document.getElementById(this.id).innerHTML = ''
                    document.getElementById(this.id).appendChild(image)
                    console.log("here5")
                }
                else {
                    player2array[this.id - 90] = 'miss'
                    var image = document.createElement('img')
                    image.src = 'images/water.png'
                    document.getElementById(this.id).innerHTML = ''
                    document.getElementById(this.id).appendChild(image)
                    console.log("here5")
                }
                click = true
                document.getElementById(this.id).removeEventListener("click",  checkFlip)
            }
            else {
                context.clearRect(600, 100, 100, 100)
                context.fillText("You can only interact with", 695, 150);
                context.fillText("the opposing board", 725, 175);
                console.log("here7")
                console.log(click)
            }
        }
    }
    else if (in_buffer) {
        console.log("in buffer can't click")
        context.clearRect(600, 100, 100, 100)
        context.fillText("You are in buffer phase ", 705, 150);
        context.fillText("click the button to begin turn", 680, 175);
    }
    else {
        context.clearRect(600, 100, 100, 100)
        context.fillText("You can only click 1 ", 715, 150);
        context.fillText("square per turn", 725, 175);
    }
    check_game_over_player_1()
    check_game_over_player_2()
    checkSunk()
}

/**
        * @author blake richmeier
        * @version 2
        * when called this board will replace the buffer board with a board printing
        * player1array showing hits, misses, but hiding where the unhit ships are
        */
function showPlayer1board() {
    context.fillText("Guess Opposing ship here", 1225, 580);
    for (let i = 0; i < 90; i++) {
        if (player2array[i] == 'hit') {
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(i + 90).innerHTML = ''
            document.getElementById(i + 90).appendChild(image)
        }
        else if (player2array[i] == 'miss') {
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(i + 90).innerHTML = ''
            document.getElementById(i + 90).appendChild(image)
        }
        else if (player2array[i] == 'sunk') {
            var image = document.createElement('img')
            image.src = 'images/sunken.png'
            document.getElementById(i + 90).innerHTML = ''
            document.getElementById(i + 90).appendChild(image)
        }
        else {
            var image = document.createElement('img')
            image.src = 'images/team10.png'
            document.getElementById(i + 90).innerHTML = ''
            document.getElementById(i + 90).appendChild(image)
        }
    }
}

/**
        * @author blake richmeier
        * @version 2
        * when called this board will replace the buffer board with a board printing player1array,
        * but showing all hits, misses, unhit ships and sunken ships
        */
function showPlayer1ships() {
    context.fillText("Your ships", 245, 580);
    player_1_turn = true
    console.log("in player 1 ships")
    for (let i = 0; i < 90; i++) {
        if (player1array[i] == 'hit') {
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
        else if (player1array[i] == 'ship') {
            var image = document.createElement('img')
            if (player_ships_placed.player1.charAt(i) == 1)
            {
                image.src = 'images/ship1.png';
            }
            else if (player_ships_placed.player1.charAt(i) == 2) {
                image.src = 'images/ship2.png';
            }
            else if (player_ships_placed.player1.charAt(i) == 3) {
                image.src = 'images/ship3.png';
            }
            else if (player_ships_placed.player1.charAt(i) == 4) {
                image.src = 'images/ship4.png';
            }
            else if (player_ships_placed.player1.charAt(i) == 5) {
                image.src = 'images/ship5.png';
            }
            else if (player_ships_placed.player1.charAt(i) == 6) {
                image.src = 'images/ship6.png';
            }
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)

        }
        else if (player1array[i] == 'sunk') {
            var image = document.createElement('img')
            image.src = 'images/sunken.png'
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
    player_two_turn_button.innerHTML = "Click Here To Swap To Player 2 After firing shot";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(player_two_turn_button);

    player_two_turn_button.addEventListener("click", () => {
        if (click) {
            player_1_turn = false
            buffer()
            body.removeChild(player_two_turn_button)
        }
    })
}

/**
        * @author blake richmeier
        * @version 2
        * when called this board will replace the buffer board with a board printing
        * player2array showing hits, misses, but hiding where the unhit ships are
        */
function showPlayer2board() {
    context.fillText("Your ships", 1260, 580);
    console.log("player 2 board")
    for (let i = 0; i < 90; i++) {
        if (player1array[i] == 'hit') {
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
        else if (player1array[i] == 'sunk') {
            var image = document.createElement('img')
            image.src = 'images/sunken.png'
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

/**
        * @author blake richmeier
        * @version 2
        * when called this board will replace the buffer board with a board printing player1array,
        * but showing all hits, misses, unhit ships and sunken ships
        */
function showPlayer2Ships() {
    context.fillText("Guess Opposing ship here", 215, 580);
    player_2_turn = true
    console.log("in player 2 ships")
    for (let i = 90; i < 180; i++) {
        if (player2array[i - 90] == 'hit') {
            var image = document.createElement('img')
            image.src = 'images/fire.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player2array[i - 90] == 'miss') {
            var image = document.createElement('img')
            image.src = 'images/water.png'
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player2array[i - 90] == 'ship') {
            var image = document.createElement('img')
            if (player_ships_placed.player2.charAt(i - 90) == 1) {
                image.src = 'images/ship1.png';
            }
            else if (player_ships_placed.player2.charAt(i - 90) == 2) {
                image.src = 'images/ship2.png';
            }
            else if (player_ships_placed.player2.charAt(i - 90) == 3) {
                image.src = 'images/ship3.png';
            }
            else if (player_ships_placed.player2.charAt(i - 90) == 4) {
                image.src = 'images/ship4.png';
            }
            else if (player_ships_placed.player2.charAt(i - 90) == 5) {
                image.src = 'images/ship5.png';
            }
            else if (player_ships_placed.player2.charAt(i - 90) == 6) {
                image.src = 'images/ship6.png';
            }
            document.getElementById(i).innerHTML = ''
            document.getElementById(i).appendChild(image)
        }
        else if (player2array[i - 90] == 'sunk') {
            var image = document.createElement('img')
            image.src = 'images/sunken.png'
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
    player_one_turn_button.innerHTML = "Click Here To Swap to Player 1 After Firing Shot";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(player_one_turn_button);

    player_one_turn_button.addEventListener("click", () => {
        console.log("code freeze")
        if (click) {
            player_2_turn = false
            buffer()
            body.removeChild(player_one_turn_button)
        }
    })

}

/**
        * @author blake richmeier
        * @version 2
        * when called this function will print a buffer board so that players can pass
        * the laptop back and forth to each other without seeing ship placement
        */
function buffer() {

    in_buffer = true;

    for (let i = 0; i < 90; i++) {
        var image = document.createElement('img')
        image.src = 'images/team10.png'
        document.getElementById(i).innerHTML = ''
        document.getElementById(i).appendChild(image)
    }

    for (let i = 90; i < 180; i++) {
        var image = document.createElement('img')
        image.src = 'images/team10.png'
        document.getElementById(i).innerHTML = ''
        document.getElementById(i).appendChild(image)
    }

    leave_buffer_button = document.createElement("leave_buffer_button");
    leave_buffer_button.innerHTML = "Click Here To Start The Turn";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(leave_buffer_button);

    if (!combat_turn || click) {
        leave_buffer_button.addEventListener("click", () => {
            if (combat_turn % 2 == 0) {
                showPlayer1board()
                showPlayer1ships()
            }
            else {
                showPlayer2Ships()
                showPlayer2board()
            }
            if (player_1_turn) {
                context.font = "Bold 12pt Candara";
                context.fillText("Player 1", 760, 50);
            }
            else {
                context.font = "Bold 12pt Candara";
                context.fillText("Player 2", 760, 50);
            }
            body.removeChild(leave_buffer_button)
            in_buffer = false;
            click = false
        })
    }
}

/**
        * @author blake richmeier
        * @version 2
        * this function will look at the length of the arrays that are keeping track of hits
        * on any given length ship. When the length = the number of the ship (i.e. length 5 ship has been hit
        * 5 times) then the function will call checkSunkHelper
        */
function checkSunk() {
    if (p1_1.length == 1) {
        checkSunkHelper(true, 1)
    }
    if (p1_2.length == 2) {
        checkSunkHelper(true, 2)
    }
    if (p1_3.length == 3) {
        checkSunkHelper(true, 3)
    }
    if (p1_4.length == 4) {
        checkSunkHelper(true, 4)
    }
    if (p1_5.length == 5) {
        checkSunkHelper(true, 5)
    }
    if (p1_6.length == 6) {
        checkSunkHelper(true, 6)
    }
    if (p2_1.length == 1) {
        checkSunkHelper(false, 1)
    }
    if (p2_2.length == 2) {
        checkSunkHelper(false, 2)
    }
    if (p2_3.length == 3) {
        checkSunkHelper(false, 3)
    }
    if (p2_4.length == 4) {
        checkSunkHelper(false, 4)
    }
    if (p2_5.length == 5) {
        checkSunkHelper(false, 5)
    }
    if (p2_6.length == 6) {
        checkSunkHelper(false, 6)
    }
}

/**
        * @author blake richmeier
        * @version 2
        * this function will loop through the player array as well as the string from the boat_selection class and
        * change 'hit' to 'sunk' for the target number. Both arrays were needed to keep track of where the numbers were
        * so that no info is lost while changing
        * @see boat_selection.js player1, player2
        */
function checkSunkHelper(isPlayerOne1, target) {
    for (let i = 0; i < 80; i++) {
        if (isPlayerOne1) {
            if (player_ships_placed.player1.charAt(i) == target) {
                player1array[i] = 'sunk'
            }
        }
        else {
            if (player_ships_placed.player2.charAt(i) == target) {
                player2array[i] = 'sunk'
            }
        }
    }
    console.log("player1", player1array)
    console.log("player2", player2array)
}

/**
        * @author blake richmeier
        * @version 2
        * this function loops through the player arrays to see if the word ship is gone
        */
function check_game_over_player_1() {
    game_over = true
    for (let i = 0; i < 90; i++) {
        if (player1array[i] == 'ship') {
            game_over = false
        }
    }
    if (game_over) {
        alert("Game over! Player 2 wins! Refresh to play again")
    }

}

/**
        * @author blake richmeier
        * @version 2
        * this function loops through the player arrays to see if the word ship is gone
        */
function check_game_over_player_2() {
    game_over2 = true
    for (let i = 0; i < 90; i++) {
        if (player2array[i] == 'ship') {
            game_over2 = false
        }
    }
    if (game_over2) {
        alert("Game over! Player 1 wins! Refresh to play again")
    }

}
