// Your game loop should be:
// Show the board
// Ask Player X for row & column
// Validate move
// Place mark
// Check win or draw
// Switch player
// Repeat until game ends




function Gameboard() {
    const rows = 3;
    const columns = 3;

    const board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }


    // This will be the method of getting board that our 
    // UI will eventually need to render it.

    const getBoard = () => board;

    const dropToken = (row, column, player) => {
        if (row < 0 || row > 2 || column < 0 || column > 2) {
            console.log("The cells position exceeds");
            return;
        }


        // Our board's outermost array represents the row,
        //  find all the rows and column that don't have a token, then place the token
        if (board[row][column].getValue() === '.') {
            board[row][column].addToken(player);
        } else {
            console.log("Cell is already taken!");
        }

    }

    const printBoard = () => {
        const boardWithCellValues = board.map((row) =>
            row.map((cell) => cell.getValue()))
        console.log("board", boardWithCellValues);
    }
    return { getBoard, dropToken, printBoard }
}


function Cell() {
    let value = "."



    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
        value = player;
    }

    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;

    return {
        addToken,
        getValue
    }
}

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {

    let win = false
    let draw = false

    const board = Gameboard();


    const players = [
        {
            name: playerOneName,
            token: "0"
        },
        {
            name: playerTwoName,
            token: "X"
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] :
            players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();

        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const checkDraw = () => {
        let b = board.getBoard();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (b[i][j].getValue() === '.') {
                    return false;
                }
            }
        }
        return true;
    }


    const playRound = (row, column) => {
        if(win || draw){
            console.log("GAME IS OVER");
            return
        }

        console.log(`Dropping ${getActivePlayer().name}'s token into row ${row} and column ${column}`)



        board.dropToken(row, column, getActivePlayer().token)

        /* This is where we would check for a winner and handle logic,
        such as a win message.
        */


        // ROW
        for (let i = 0; i < 3; i++) {

            // console.log("b[i]", getActivePlayer().token);
            // console.log("f", board.getBoard()[i][0].getValue());
            if (board.getBoard()[i][0].getValue() === getActivePlayer().token
                && board.getBoard()[i][1].getValue() === getActivePlayer().token
                && board.getBoard()[i][2].getValue() === getActivePlayer().token) {
                win = true
            }
        }

        // COLUMN
        for (let i = 0; i < 3; i++) {

            if (board.getBoard()[0][i].getValue() === getActivePlayer().token
                && board.getBoard()[1][i].getValue() === getActivePlayer().token
                && board.getBoard()[2][i].getValue() === getActivePlayer().token) {
                win = true

            }
        }

        // DIAGONAL
        if (board.getBoard()[0][0].getValue() === getActivePlayer().token
            && board.getBoard()[1][1].getValue() === getActivePlayer().token
            && board.getBoard()[2][2].getValue() === getActivePlayer().token) {
            win = true
        }
        else if (board.getBoard()[0][2].getValue() === getActivePlayer().token
            && board.getBoard()[1][1].getValue() === getActivePlayer().token
            && board.getBoard()[2][0].getValue() === getActivePlayer().token) {
            win = true
        }

        if (win) {
            console.log(`${getActivePlayer().name} is the winner`);
            return
        }
        if (checkDraw()) {
            draw = true;
            console.log("DRAW!!!");
            return
        }

        // Switch player turn
        switchPlayerTurn();


        // console.log(",",board.getBoard()[row][column].getValue());

        printNewRound();

        return { activePlayer: getActivePlayer(), win };

    }

    return {
        playRound,
        getActivePlayer,
        checkDraw
    };
}

const game = GameController();
game.checkDraw()
