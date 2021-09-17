let in_boat_selcection = true; //if in the boat selection phase
let num_of_ships = 1; //holds the number of ships
let ship_inc = 1; //increment that counts up to compare with the number of ships
let max_ships; //maximum amount of ships that player2 can place
let more_ships = false; //Bool to track whether more ships need to be placed
let boat_first_click = true; //If the new boat is the first block being placed
let is_vertical = true; //If the boat is in a vertical orientation
let is_horizontal = true; //If the boat is in a horizontal orientaion
var yes_button; //varibale to hold the yes_button
var body; //body declaration to help with the placement of buttons
var no_button; //variable to hold the no_button

//Strings that will hold where the boats are
let player_ships_placed = {
    player1: "..........................................................................................",
    player2: "..........................................................................................",
}

//Click function that runs when there is a click on the boards
function boat_sel_click() {
    console.log(this);
    if (in_boat_selcection) {
        if (boat_first_click  && !first_turn_already_a_ship_there(parseInt(this.id)) && valid_first_block(parseInt(this.id))) {
            store_ship(parseInt(this.id));
            var shipImage = document.createElement('img');
            if (num_of_ships == 1)
                shipImage.src = 'images/ship1.png';
            else if (num_of_ships == 2)
                shipImage.src = 'images/ship2.png';
            else if (num_of_ships == 3)
                shipImage.src = 'images/ship3.png';
            else if (num_of_ships == 4)
                shipImage.src = 'images/ship4.png';
            else if (num_of_ships == 5)
                shipImage.src = 'images/ship5.png';
            else if (num_of_ships == 6)
                shipImage.src = 'images/ship6.png';

            document.getElementById(this.id).appendChild(shipImage)
            ship_inc++;
            boat_first_click = false;
        }
        else if (ship_inc <= num_of_ships  && boat_check_valid_move(parseInt(this.id))) {
            store_ship(parseInt(this.id));
            var shipImage = document.createElement('img')
            if (num_of_ships == 1)
                shipImage.src = 'images/ship1.png';
            else if (num_of_ships == 2)
                shipImage.src = 'images/ship2.png';
            else if (num_of_ships == 3)
                shipImage.src = 'images/ship3.png';
            else if (num_of_ships == 4)
                shipImage.src = 'images/ship4.png';
            else if (num_of_ships == 5)
                shipImage.src = 'images/ship5.png';
            else if (num_of_ships == 6)
                shipImage.src = 'images/ship6.png';
            document.getElementById(this.id).innerHTML = ''
            document.getElementById(this.id).appendChild(shipImage) 
            ship_inc++;
        }
        else if (ship_inc > num_of_ships) {
            context.fillText("Max number of blocks placed", 675, 475);
            context.fillText("Plese select yes or no", 710, 500);
        }
        else if (boat_check_valid_move(parseInt(this.id)) == false) {
            if (first_turn_already_a_ship_there(parseInt(this.id))) {
                context.fillText("Already a ship there!", 180, 600);
            }
            else {
                context.fillText("Please selects blocks to create", 675, 600);
                context.fillText("a 1x" + num_of_ships + " ship", 755, 625);
            }
        }

        if (num_of_ships < 6 && ship_inc == num_of_ships + 1 && is_player_one) {
            context.fillText("Would you like to add ", 708, 150);
            context.fillText("another ship?", 740, 175);
            ask_more_ships();
        }
        else if (ship_inc == num_of_ships + 1 && is_player_one) {
            context.fillText("Ready to pass", 735, 150);
            context.fillText("to player 2?", 740, 175);
            ask_more_ships();
            if(is_player_one){
                fillSquaresPlayer1()
            }
            else{
                fillSquaresPlayer2()
            }
        }
        else if (!is_player_one && ship_inc == num_of_ships+1) {
            context.fillText("Are you done adding boat "+ num_of_ships + "?",675,150);
            ask_more_ships();
        }
    }
}

//Helps give instructions for where and how many blocks long ships are
function place_ships() {
    if (num_of_ships == 1) {
        reset_bools();
        ship_inc = 1;
        print_boat_sel_inst()
    }
    else if (num_of_ships == 2 && more_ships == true) {
        reset_bools();
        ship_inc = 1;
        print_boat_sel_inst()
    }
    else if (num_of_ships == 3 && more_ships == true) {
        reset_bools();
        ship_inc = 1;
        print_boat_sel_inst()
    }
    else if (num_of_ships == 4 && more_ships == true) {
        reset_bools();
        ship_inc = 1;
        print_boat_sel_inst()
    }
    else if (num_of_ships == 5 && more_ships == true) {
        reset_bools();
        ship_inc = 1;
        print_boat_sel_inst()
    }
    else if (num_of_ships == 6 && more_ships == true) {
        reset_bools();
        ship_inc = 1;
        print_boat_sel_inst()
    }
}

//Function that helps make the yes and no buttons, along with what to do when clicking yes and no
function ask_more_ships() {
    yes_button = document.createElement("yes_button");
    yes_button.innerHTML = "Yes";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(yes_button);

    if(is_player_one) {
        no_button = document.createElement("no_button");
        no_button.innerHTML = "No";
        body.appendChild(no_button);
    }
    yes_button.addEventListener("click", () => {
        body.removeChild(yes_button);
        if (is_player_one) {
            body.removeChild(no_button);
        }
        num_of_ships++;
        more_ships = true;
        if (num_of_ships == 7 && is_player_one) {
            max_ships = num_of_ships;
            is_player_one = false;
            num_of_ships = 1;
        }
        else if (!is_player_one && num_of_ships == max_ships+1) {
            in_boat_selcection = false;
            combat_phase = true;
            fillSquaresPlayer2();
            start_combat();
            console.log("should start combat phase")
        }
        draw();
    })
    
    no_button.addEventListener("click", () => {
        body.removeChild(yes_button);
        body.removeChild(no_button);
        more_ships = false;
        if (is_player_one) {
            is_player_one = false;
            fillSquaresPlayer1();
        } else {
            in_boat_selcection = false;
            combat_phase = true;
            fillSquaresPlayer2();
            start_combat();
        }
        max_ships = num_of_ships;
        num_of_ships = 1;
        draw();
    })
}

//Function that stores the ships in the player strings, as well as calls checkHit
//in order to store data in a separate array (checkHit() is in game.js)
function store_ship(num) {
    if (is_player_one) {
        player_ships_placed.player1 =
            player_ships_placed.player1.slice(0, num) +
            num_of_ships +
            player_ships_placed.player1.slice(num+1, 90)
        checkHit(num, is_player_one)
        console.log(player_ships_placed.player1);
    }
    else {
        player_ships_placed.player2 =
            player_ships_placed.player2.slice(0, num - 90) +
            num_of_ships +
            player_ships_placed.player2.slice((num - 90)+1, 90)
        checkHit(num, is_player_one)
        console.log(player_ships_placed.player2);
    }
}

//Checks if the block being placed is a valid move for the current boat
function boat_check_valid_move(num) {
    if (is_player_one) {
        for (i = 1; i < num_of_ships; i++) {
            if (player_ships_placed.player1.charAt(num) != ".") { //<-- checks to ensure there isn't already a ship placed there
                return false;
            }
            else if (player_ships_placed.player1.charAt(num - i) == num_of_ships && is_horizontal) {
                is_vertical = false;
                return true
            }
            else if (player_ships_placed.player1.charAt(num + i) == num_of_ships && is_horizontal) {
                is_vertical = false;
                return true;
            }
            else if (player_ships_placed.player1.charAt(num - (i * 10)) == num_of_ships && is_vertical) {
                is_horizontal = false;
                return true;
            }
            else if (player_ships_placed.player1.charAt(num + (i * 10)) == num_of_ships && is_vertical) {
                is_horizontal = false;
                return true;
            }
            return false;
        }
    }
    else {
        num = num - 90;
        for (i = 1; i < num_of_ships; i++) {
            if (player_ships_placed.player2.charAt(num) != ".") { //<-- checks to ensure there isn't already a ship placed there
                return false;
            }
            else if (player_ships_placed.player2.charAt(num - i) == num_of_ships && is_horizontal) {
                return true
            }
            else if (player_ships_placed.player2.charAt(num + i) == num_of_ships && is_horizontal) {
                return true;
            }
            else if (player_ships_placed.player2.charAt(num - (i * 10)) == num_of_ships && is_vertical) {
                return true;
            }
            else if (player_ships_placed.player2.charAt(num + (i * 10)) == num_of_ships && is_vertical) {
                return true;
            }
            return false;
        }
    }
}

function valid_first_block(num) {
    let space_up = 0, space_down = 0, space_left = 0, space_right = 0
    if (is_player_one) {
        if (player_ships_placed.player1.charAt(num) != ".") { //<-- checks to ensure there isn't already a ship placed there
            return false;
        }
        for (i = 1; i < 10; i++) {
            if (player_ships_placed.player1.charAt(num - i) == "." && (num % 10) - i >= 0 && i - 1 == space_left) {
                space_left++
            }
            if (player_ships_placed.player1.charAt(num + i) == "." && (num % 10) + i < 10 && i - 1 == space_right) {
                space_right++
            }
            if (player_ships_placed.player1.charAt(num - (i * 10)) == "." && i - 1 == space_up) {
                space_up++
            }
            if (player_ships_placed.player1.charAt(num + (i * 10)) == "." && i - 1 == space_down) {
                space_down++
            }
        }
    }
    else {
        num = num - 90;
        if (player_ships_placed.player2.charAt(num) != ".") { //<-- checks to ensure there isn't already a ship placed there
            return false;
        }
        for (i = 1; i < 10; i++) {
            if (player_ships_placed.player2.charAt(num - i) == "." && (num % 10) - i >= 0 && i - 1 == space_left) {
                space_left++
            }
            if (player_ships_placed.player2.charAt(num + i) == "." && (num % 10) + i < 10 && i - 1 == space_right) {
                space_right++
            }
            if (player_ships_placed.player2.charAt(num - (i * 10)) == "." && i - 1 == space_up) {
                space_up++
            }
            if (player_ships_placed.player2.charAt(num + (i * 10)) == "." && i - 1 == space_down) {
                space_down++
            }
        }
    }
    if(num_of_ships - 1 <= space_down + space_up || num_of_ships - 1 <= space_left + space_right) {
        if(num_of_ships - 1 <= space_down + space_up == false) {
            is_vertical = false
        }
        if(num_of_ships - 1 <= space_left + space_right == false) {
            is_horizontal = false
        }
        return true
    }
}

function first_turn_already_a_ship_there(num) {
    if (is_player_one) {
        if (player_ships_placed.player1.charAt(num) != ".")
            return true;
        else
            return false;
    }
    else {
        num = num - 90;
        if (player_ships_placed.player2.charAt(num) != ".")
            return true;
        else
            return false;
    }
    
}

//helper function to reset the bools when swapping to another ship
function reset_bools() {
    is_vertical = true;
    is_horizontal = true;
    boat_first_click = true;
}

//helper function to help print out instructions to the board
function print_boat_sel_inst() {
    context.fillText("Please select the blocks where you want", 635, 75);
    context.fillText("the first ship of size=" + num_of_ships + " block", 680, 100);
    if (is_player_one) {
        context.fillText("<------------------------------------------------", 655, 125);
    }
    else {
        context.fillText("------------------------------------------------->", 655, 125);
    }
}