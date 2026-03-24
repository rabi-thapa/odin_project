function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell())
        }
    }

    const getBoard = () => board;

    const dropToken = (row, column, player) => {
        if (row < 0 || row > 2 || column < 0 || column > 2) {
            console.log("The cells position exceeds");
            return;
        }

        if (board[row][column].getValue() === '.') {
            board[row][column].addToken(player);
        } else {
            console.log("Cell is already taken!");
        }
    }

    // This will be the method of getting board that our
    // UI will eventually need to render it.
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
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const checkDraw = () => {
        let b = board.getBoard();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (b[i][j].getValue() === '.') {
                    return false
                }
            }
        }
        return true
    }

    const playRound = (row, column) => {
        console.log(`Dropping ${getActivePlayer().name}'s token into row ${row} and column ${column}`);

        board.dropToken(row, column, getActivePlayer().token)

        /* This is where we would check for a winner and handle logic,
        such as a win message.
        */

        // ROW
        for (let i = 0; i < 3; i++) {
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

        switchPlayerTurn();

        printNewRound();



        return { activePlayer: getActivePlayer(), getWin }
    }

    const getWin = () => win;
    const getDraw= () => draw;

    return {
        playRound,
        getActivePlayer,
        getBoard: board.getBoard,
        checkDraw,
        getWin,
        getDraw
    }

}



function ScreenController() {

    const game = GameController();
    const playerTurnDiv = document.querySelector('.turn')
    const boardDiv = document.querySelector('.board')

    const container = document.querySelector('.container')

    const updateScreen = () => {
        // clear the board
        // boardDiv.textContent="";
        boardDiv.textContent = "";

        // get the newest version of the board and player turn
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();


        console.log("game win", game.getWin());





        // Display player's turn
        playerTurnDiv.textContent = `${activePlayer.name}'s turn...`


        if (game.getWin()) {
            playerTurnDiv.textContent = `${activePlayer.name} is the winner`
            return
        }
        else if(game.getDraw()){
            container.innerHTML= `<h1>DRAW</h1>`
        }

        // Render board squares
        board.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellButton = document.createElement("button");

                cellButton.classList.add("cell")

                // Create a data attributes to identify the column 
                // This makes it easier to pass into our `playRound` function

                cellButton.dataset.row = rowIndex
                cellButton.dataset.column = columnIndex

                cellButton.textContent = cell.getValue();

                boardDiv.appendChild(cellButton);
            })

        });
    }

    function clickHandlerBoard(e) {
        const selectedRow = Number(e.target.dataset.row);
        const selectedColumn = Number(e.target.dataset.column);
        console.log("row", selectedRow);
        console.log("col", selectedColumn);


        // Make sure I've clicked a column and not the gaps in between
        if (selectedRow === undefined || selectedColumn === undefined) {
            console.log("Row or column not selected");
            return;
        }

        game.playRound(selectedRow, selectedColumn);
        updateScreen();

    }
    boardDiv.addEventListener("click", clickHandlerBoard);


    // Initial render
    updateScreen();

    // We don't need to return anything from this module because everything is encapsulated inside this screen controller
}


ScreenController();