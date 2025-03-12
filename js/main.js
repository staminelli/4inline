let row = 0;
let turn = 0;
let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

function addCoin(column){
        for (let i = 0; i <= 5; i++){
            if (board[i][column] == null){
                board[i][column] = turn;
                row = i;
                let coin = document.getElementById(`${row}${column}`);
                if (turn == 0){
                    coin.style.backgroundColor = 'red';
                    coin.style.boxShadow = 'inset 3px -1px 2px 1px #0003c5';
                }
                else {
                    coin.style.backgroundColor = 'yellow';
                    coin.style.boxShadow = 'inset 3px -1px 2px 1px #0003c5';
                }
                turn = turn == 0 ? 1 : 0;
                break;
            }
        }
    if (checkWin()){
        let coin = document.getElementById(`${row}${column}`);
        coin.style.backgroundColor = 'white';
        coin.style.boxShadow = "inset 5px -1px 2px 1px #0003c5"
        document.getElementById('winner').innerText = `Jugador ${turn == 0 ? "Rojo" : "Amarillo"} gana!`;
        document.querySelectorAll('.cell').forEach(cell => cell.style.pointerEvents = 'none');
    }
}

function checkWin(){
    let count = 0;
    
    // check rows
    for (let i = 0; i <= 5; i++){ 
        console.log('i: ' + i);
        for (let j = 0; j <= 6; j++){
            console.log('j: ' + j);
            if (board[i][j] == turn){
                count++;
                console.log('cuenta j: ' + count);
            } else {
                count = 0;
            }
            if (count == 4){
                return true;
            }
        }
    }
    
    // check columns
    for (let i = 0; i <= 6; i++){ 
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
    
    // check diagonals (/)
    for (let i = 0; i <= 2; i++){ 
        for (let j = 0; j <= 3; j++){
            if (board[i][j] == turn && board[i+1][j+1] == turn && board[i+2][j+2] == turn && board[i+3][j+3] == turn){
                return true;
            }
        }
    }
    
    // check diagonals (\)
    for (let i = 0; i <= 2; i++){ 
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
            coin.style.boxShadow = "inset 5px -1px 2px 1px #0003c5";
        }
    }
    turn = 0;
    document.getElementById('winner').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.style.pointerEvents = 'auto');
}
