function Gameboard() {
    const rows= 3;
    const columns= 3;

    const board= [];
    for(let i=0; i<rows; i++){
        board[i] = [];
        for(let j=0; j<columns; j++){
            board[i].push(Cell())
        }
    }

    // This will be the method of getting board that our
    // UI will eventually need to render it.
}

function Cell(){
    let value="."

    // Accept a player's token to change the value of the cell
    const addToken =(player)=>{
        value= player;
    }

    // How we will retrieve the current value of this cell through closure
    const getValue= ()=> value;

    return{
        addToken,
        getValue
    }
}

function GameController(
    playerOneName= "Player One",
    playerTwoName= "Player Two"
){
    const board= Gameboard();
    const players=[
        {
            name:playerOneName,
            token: "0"
        },
        {
            name: playerTwoName,
            token: "X"
        }
    ];

    let activePlayer= players[0];

    const switchPlayerTurn= ()=>{
        activePlayer= activePlayer===players[0] ?players[1]: players[0];
    }
    
}



function ScreenController() {
    const game= GameController();
    const playerTurnDiv= document.querySelector('.turn')
    const boardDiv= document.querySelector('.board')

    const updateScreen= ()=>{
        // clear the board
        boardDiv.textContent="";

        // get the newest version of the board and player turn
        const board= game.getBoard();
        const activePlayer= game.getAc
    }
}


ScreenController()