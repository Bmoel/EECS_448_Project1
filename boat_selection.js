let in_boat_selcection = true;
let num_of_ships = 1;
let ship_inc = 1;
let previous_click;
let more_ships = false;
var yes_button;
var body;
var no_button;

//NOT COMPLETE: For now helps put numbers in the squares, but needs to be optimized
function boat_sel_click() {
    if(in_boat_selcection) {
        if(ship_inc <= num_of_ships) {
            previous_click = this.id;
            this.innerHTML = num_of_ships;
        }
        ask_more_ships();
    }
}

//Helps give instructions for where and how many blocks long ships are
function place_ships() {
    if(num_of_ships == 1) {
        ship_inc = 1;
        context.fillText("Please select where you want the",600,75);
        context.fillText("first ship of size=1 block",600,100);
    }
    else if(num_of_ships == 2 & more_ships == true) {
        console.log(previous_click);
        ship_inc = 1;
        context.fillText("Please select where you want the",600,75);
        context.fillText("first ship of size=2 block",600,100);
    }
    else if(num_of_ships == 3 & more_ships == true) {
        ship_inc = 1;
        context.fillText("Please select where you want the",600,75);
        context.fillText("first ship of size=3 block",600,100);
    }
    else if(num_of_ships == 4 & more_ships == true) {
        ship_inc = 1;
        context.fillText("Please select where you want the",600,75);
        context.fillText("first ship of size=4 block",600,100);
    }
    else if(num_of_ships == 5 & more_ships == true) {
        ship_inc = 1;
        context.fillText("Please select where you want the",600,75);
        context.fillText("first ship of size=5 block",600,100);
    }
    else if(num_of_ships == 6 & more_ships == true){
        ship_inc = 1;
        context.fillText("Please select where you want the",600,75);
        context.fillText("first ship of size=6 block",600,100);
    }
}

//function that helps make the yes and no buttons, along with what to do when clicking yes and no
function ask_more_ships() {
    yes_button = document.createElement("yes_button");
    yes_button.innerHTML = "Yes";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(yes_button);

    no_button = document.createElement("no_button");
    no_button.innerHTML = "No";
    body.appendChild(no_button);
    if(num_of_ships < 6) {
        context.fillText("Would you like to add ",600,150);
        context.fillText("another ship?",600,175);
    }
    else {
        context.fillText("Ready to pass",600,150);
        context.fillText("to player 2?",600,175);
    }

    yes_button.addEventListener("click", () => {
        body.removeChild(yes_button);
        body.removeChild(no_button);
        num_of_ships++;
        more_ships = true;
        if(num_of_ships == 7) {
            is_player_one = false;
            num_of_ships = 1;
        }
        draw();
    })

    no_button.addEventListener("click", () => {
        body.removeChild(yes_button);
        body.removeChild(no_button);
        more_ships = false;
        if(is_player_one) {
            is_player_one = false;
        } else {
            is_player_one = true;
        }
        num_of_ships = 1;
        draw();
    })
}

//supposed to help see if it is a valid move for placing next block, but not working for now
function boat_sel_valid_move(num) {
    if(num.id == previous_click+1) {
        return true
    }
    else if (num == previous_click-1) {
        return true;
    }
    else if (num == previous_click-10) {
        return true;
    }
    else if (num == previous_click+10){
        return true;
    }
    else 
    {
        return false;
    }
}