let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let game = document.getElementById("game");
let turn = document.getElementById("turn");
let buttonReset = document.getElementById("reset");

let board = [];

let player = "X";
let winner;
turn.textContent = "Player " + player;
let isPlaying = true;
let count = 0;

function createCell(rowIndex, cellIndex) {
    let cell = document.createElement("div");
    cell.className = "cell";

    cell.addEventListener(
        "click",
        function () {
            if (isPlaying) {
                this.textContent = player;
                board[rowIndex * 3 + cellIndex] = player;

                winner = checkWinner();
            }

            if (!winner) {
                player = player == "X" ? "O" : "X";
                turn.textContent = "Player " + player;
                count++;
            } else {
                turn.textContent = "Winner " + player;
                buttonReset.disabled = false;
            }

            if (count === 9) {
                isPlaying = false;
                buttonReset.disabled = false;
            }
        },
        {
            once: true,
        }
    );

    return cell;
}

function createRow(rowIndex) {
    let row = document.createElement("div");
    row.className = "row";

    for (let celIndex = 0; celIndex < 3; celIndex++)
        row.appendChild(createCell(rowIndex, celIndex));

    return row;
}

function render() {
    for (let rowIndex = 0; rowIndex < 3; rowIndex++)
        game.appendChild(createRow(rowIndex));
}

function checkWinner() {
    for (let win of wins) {
        let i = win[0],
            j = win[1],
            k = win[2];

        if (board[i] && board[i] == board[j] && board[j] == board[k]) {
            isPlaying = false;
            return board[i];
        }
    }
}

function reset() {
    if (!isPlaying) {
        isPlaying = true;
        board = [];
        game.innerHTML = "";
        render();
        buttonReset.disabled = true;
    }
}

buttonReset.addEventListener("click", reset);

render();
