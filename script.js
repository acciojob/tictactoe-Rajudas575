//your JS code here. If required.
let currentPlayer = 'X';
let player1 = '';
let player2 = '';
const board = Array(9).fill(null);
const cells = document.querySelectorAll('.cell');
const messageDiv = document.querySelector('.message');

document.getElementById('submit').addEventListener('click', () => {
    player1 = document.getElementById('player-1').value;
    player2 = document.getElementById('player-2').value;
    if (player1 && player2) {
        document.querySelector('.player-names').style.display = 'none';
        document.querySelector('.game').style.display = 'block';
        messageDiv.textContent = `${player1}, you're up!`;
    }
});

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const cellIndex = cell.id - 1;
        if (!board[cellIndex] && !checkWinner()) {
            board[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;

            if (checkWinner()) {
                messageDiv.textContent = currentPlayer === 'X' ? `${player1} congratulations you won!` : `${player2} congratulations you won!`;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageDiv.textContent = currentPlayer === 'X' ? `${player1}, you're up!` : `${player2}, you're up!`;
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}
