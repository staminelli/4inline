# 4 en Linea

Este es un juego de "4 en línea" implementado en HTML, CSS y JavaScript.

## Estructura del Proyecto

```
index.html
css/
    style.css
js/
    main.js
```

### Archivos

- **index.html**: Contiene la estructura HTML del tablero de juego y los elementos de la interfaz de usuario.
- **css/style.css**: Contiene los estilos CSS para el diseño del tablero y los elementos de la interfaz de usuario.
- **js/main.js**: Contiene la lógica del juego en JavaScript.

## Cómo Jugar

1. Abre el archivo index.html en tu navegador web.
2. Haz clic en una de las celdas del tablero para agregar una ficha.
3. El juego alternará entre los jugadores rojo y amarillo.
4. El primer jugador en alinear cuatro fichas en una fila, columna o diagonal gana el juego.
5. Haz clic en el botón "Reiniciar" para reiniciar el juego.

## Funciones Principales

### HTML

El archivo index.html contiene la estructura del tablero de juego y los elementos de la interfaz de usuario.

### CSS

El archivo style.css define los estilos para el tablero de juego y los elementos de la interfaz de usuario.

### JavaScript

El archivo main.js contiene la lógica del juego, incluyendo las siguientes funciones:

- `addCoin(column)`: Agrega una ficha a la columna especificada.
- `checkWin()`: Verifica si un jugador ha ganado el juego.
- `reset()`: Reinicia el tablero de juego.

## Ejemplo de Código

### HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4 en linea</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js" defer></script>
</head>
<body>
    <table id="board">
        <!-- ...celdas del tablero... -->
    </table>
    <div id="winner-container">
        <button id="reset" onclick="reset()">Reiniciar</button>
        <h3 id="winner"></h3>
    </div>
</body>
</html>
```

### CSS

```css
table {
    background-color: rgb(26, 49, 255);
    border-radius: 5px;
    box-shadow: 5px 5px 5px #777;
    margin: 0 auto;
    padding: 10px;
    table-layout: fixed;
    transform: perspective(1500px) rotateY(-10deg);
}
.cell {
    background-color: #fff;
    border: 1px solid #2b67e9;
    border-radius: 50%;
    box-shadow: inset 5px -1px 2px 1px #0003c5;
    height: 50px;
    margin: 1px;
    text-align: center;
    width: 50px;
}
#reset {
    background-color: #f00;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 10px  #999;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    margin: 0 auto;
    padding: 10px;
    text-shadow: 1px 1px 3px #333;
}
#reset:active {
    background-color: #c00000;
}
.red {
    background-color: red;
}
.yellow {
    background-color: yellow;
}
#winner-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}
```

### JavaScript

```js
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
```

¡Disfruta jugando a "4 en línea"!
