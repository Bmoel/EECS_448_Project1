let canvas; //global canvas
let context; //global context

document.addEventListener('DOMContentLoaded', () => {

    let turn = -1;

    const square = document.querySelectorAll('.square')

    const player1array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                            20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
                            40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
                            60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]

    const player2array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                            20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
                            40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
                            60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
    
    
    square.forEach(id => {
        id.addEventListener('click', checkHit)
    })

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

})