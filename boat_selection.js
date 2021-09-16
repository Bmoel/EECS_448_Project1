let in_boat_selcection = true;
let num_of_ships = 1;
let ship_inc = 1;
let max_ships;
let more_ships = false;
let boat_first_click = true;
let is_vertical = true;
let is_horizontal = true;
var yes_button;
var body;
var no_button;

let player_ships_placed = {
    player1: "..........................................................................................",
    player2: "..........................................................................................",
}

function boat_sel_click() {
    console.log(this);
    if (in_boat_selcection) {
        if (boat_first_click && !first_turn_already_a_ship_there(parseInt(this.id))) {
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
        else if (ship_inc <= num_of_ships && boat_check_valid_move(parseInt(this.id))) {
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
            context.fillText("Max number of blocks placed", 180, 575);
            context.fillText("Plese select yes or no", 210, 600);
        }
        else if (boat_check_valid_move(parseInt(this.id)) == false) {
            if (first_turn_already_a_ship_there(parseInt(this.id))) {
                context.fillText("Already a ship there!", 180, 600);
            }
            else {
                context.fillText("Please selects blocks to create", 180, 600);
                context.fillText("a 1x" + num_of_ships + " ship", 260, 625);
            }
        }

        if (num_of_ships < 6 && ship_inc == num_of_ships + 1 && is_player_one) {
            context.fillText("Would you like to add ", 695, 150);
            context.fillText("another ship?", 725, 175);
            ask_more_ships();
        }
        else if (ship_inc == num_of_ships + 1 && is_player_one) {
            context.fillText("Ready to pass", 600, 150);
            context.fillText("to player 2?", 600, 175);
            ask_more_ships();
            if(is_player_one){
                fillSquaresPlayer1()
            }
            else{
                fillSquaresPlayer2()
                start_combat()
            }
        }
        else if (!is_player_one) {
            context.fillText("Are you done adding boat "+ num_of_ships + "?",675,150);
            if (ship_inc == num_of_ships+1) {
                ask_more_ships();
            }
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

//function that helps make the yes and no buttons, along with what to do when clicking yes and no
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

function store_ship(num) {
    if (is_player_one) {
        player_ships_placed.player1 =
            player_ships_placed.player1.slice(0, num) +
            num_of_ships +
            player_ships_placed.player1.slice(num, 89)
        checkHit(num, is_player_one)
        console.log(player_ships_placed.player1);
    }
    else {
        player_ships_placed.player2 =
            player_ships_placed.player2.slice(0, num - 90) +
            num_of_ships +
            player_ships_placed.player2.slice((num - 90), 89)
        checkHit(num, is_player_one)
        console.log(player_ships_placed.player2);
    }
}

function boat_check_valid_move(num) {
    if (is_player_one) {
        for (i = 1; i < num_of_ships; i++) {
            if (player_ships_placed.player1.charAt(num - i) == num_of_ships && is_horizontal) {
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
        }
        return false;
    }
    else {
        num = num - 90;
        for (i = 1; i < num_of_ships; i++) {
            if (player_ships_placed.player2.charAt(num - i) == num_of_ships && is_horizontal) {
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
            if (player_ships_placed.player2.charAt(num) != ".") { //<-- checks to ensure there isn't already a ship placed there
                return false;
            }
            return false;
        }
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

function reset_bools() {
    is_vertical = true;
    is_horizontal = true;
    boat_first_click = true;
}

function print_boat_sel_inst() {
    context.fillText("Please select where you want the", 655, 75);
    context.fillText("first ship of size=" + num_of_ships + " block", 685, 100);
    if (is_player_one) {
        context.fillText("<------------------------------------------------", 655, 125);
    }
    else {
        context.fillText("------------------------------------------------->", 655, 125);
    }
}