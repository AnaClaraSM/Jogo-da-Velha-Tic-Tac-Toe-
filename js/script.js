//Functions

function clearBoard() {
    //Clear cells
    cell_1.innerHTML = "";
    cell_2.innerHTML = "";
    cell_3.innerHTML = "";
    cell_4.innerHTML = "";
    cell_5.innerHTML = "";
    cell_6.innerHTML = "";
    cell_7.innerHTML = "";
    cell_8.innerHTML = "";
    cell_9.innerHTML = "";
    //Switch player to X
    player = "X";
    //Define match as not ended
    end_match = 0;
}

function verifyWinner() {
    //Row 1 complete
    if ((cell_1 == player) && (cell_2 == player) && (cell_3 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Row 2 complete
    else if ((cell_4 == player) && (cell_5 == player) && (cell_6 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Row 3 complete
    else if ((cell_7 == player) && (cell_8 == player) && (cell_9 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Column 1 complete
    else if ((cell_1 == player) && (cell_4 == player) && (cell_7 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Column 2 complete
    else if ((cell_2 == player) && (cell_5 == player) && (cell_8 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Column 3 complete
    else if ((cell_3 == player) && (cell_6 == player) && (cell_9 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Diagonal 1 complete
    else if ((cell_1 == player) && (cell_5 == player) && (cell_9 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Diagonal 2 complete
    else if ((cell_3 == player) && (cell_5 == player) && (cell_7 == player)) {
        alert(`End of the match! ${player} won!`)
    }
    //Tie
    else if ((cell_1 != "") && (cell_2 != "") && (cell_3 != "") && (cell_1 != "") && (cell_1 != "") && (cell_1 != "")) {

    }

}

function switchPlayer() {
    //If the current player is "X" 
    if (player == "X") {
        //Switches to "O"
        player = "O";
    }
    //If it's "O"
    else {
        //Switches to "X"
        player = "X";
    }
}

function markPosition(cell) {
    //If the match is not finished
    if (end_match == 0) {
        //If the selected cell is empty
        if (cell.innerHTML == "") {
            //Marks the cell
            cell.innerHTML == `<span class="${player}">${player}</span>`;
            //Verify if the match is won everytime a position is marked
            verifyWinner();
            //Switches the player
            switchPlayer();
        }
        //If the cell is already filled
        else {
            alert("Esta posição já foi ocupada!")
        }
    }
    //If the match has been finished (and not restarted)
    else {
        alert("Partida já finalizada! Comece novamente!")
    }
    
}

// Variables

//Buttons
let start_btn = document.getElementById('start-btn');
let about_btn = document.getElementById('about-btn');

//Action Phrase
let action_phrase = document.getElementById('action-phrase');

// Cells
let cell_1 = document.getElementById('cell-1');
let cell_2 = document.getElementById('cell-2');
let cell_3 = document.getElementById('cell-3');
let cell_4 = document.getElementById('cell-4');
let cell_5 = document.getElementById('cell-5');
let cell_6 = document.getElementById('cell-6');
let cell_7 = document.getElementById('cell-7');
let cell_8 = document.getElementById('cell-8');
let cell_9 = document.getElementById('cell-9');

// Player -> X or O
let player = "X";
// End of Match Flag ->  0 == Not Ended  |  1 == Ended
let end_match = "0";

// Execution

// Game Start
start_btn.addEventListener('click', () => {
    //Clean the board
    clearBoard();
    //Informs the player's turn
    action_phrase.innerHTML = `Player's turn: <span class="${player}">${player}</span>`;
})