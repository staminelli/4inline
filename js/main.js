let turn = 0;
let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]


let row = 0;
function addCoin(column){
    for (let i = 0; i <= 5; i++){
        if (board[i][column] == null){
            board[i][column] = turn;
            row = i;
            let coin = document.getElementById(`${row}${column}`);
            console.log(coin);
            turn == 0 ? coin.style.backgroundColor = 'red' : coin.style.backgroundColor = 'yellow';
            turn = turn == 0 ? 1 : 0;
            break;
        }
    }
    if (checkWin()){
        document.getElementById('winner').innerText = `Player ${turn == 0 ? "Red" : "Yellow"} wins!`;
  }
    console.log(board);
}

function checkWin(){
    let count = 0;
    for (let i = 0; i <= 5; i++){ // check rows
        for (let j = 0; j <= 6; j++){
            if (board[i][j] == turn){
                count++;
            } else {
                count = 0;
            }
            if (count == 4){
                return true;
            }
        }
    }
    for (let i = 0; i <= 6; i++){ // check columns
        for (let j = 0; j <= 5; j++){
            if (board[j][i] == turn){
                count++;
            } else {
                count = 0;
            }
            if (count == 4){
                return true;
            }
        }
    }
    for (let i = 0; i <= 2; i++){ // check diagonals (/)
        for (let j = 0; j <= 3; j++){
            if (board[i][j] == turn && board[i+1][j+1] == turn && board[i+2][j+2] == turn && board[i+3][j+3] == turn){
                return true;
            }
        }
    }
    for (let i = 0; i <= 2; i++){ // check diagonals (\)
        for (let j = 6; j >= 3; j--){
            if (board[i][j] == turn && board[i+1][j-1] == turn && board[i+2][j-2] == turn && board[i+3][j-3] == turn){
                return true;
            }
        }
    }
    return false;
}

function reset(){
    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 6; j++){
            board[i][j] = null;
            let coin = document.getElementById(`${i}${j}`);
            coin.style.backgroundColor = 'white';
        }
    }
    turn = 0;
}
