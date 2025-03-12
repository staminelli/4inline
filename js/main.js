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
        console.log(i)
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
    console.log(board);
}


