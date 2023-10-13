"use strict"

      // Constants
      
      const cells = document.querySelectorAll('[data-cell]');
        const status = document.getElementById('status');
        const restartButton = document.getElementById('restart');

        // Game objects
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

      function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = Array.from(cells).indexOf(cell);

        if (gameBoard[cellIndex] === '' && gameActive) {
            gameBoard[cellIndex] = currentPlayer;
            cell.innerText = currentPlayer;
            cell.classList.add(currentPlayer);

            if (checkWin()) {
                endGame(false);
            } else if (isBoardFull()) {
                endGame(true);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.innerText = `Player ${currentPlayer}'s turn`;
            }
        }
     }

      function isBoardFull() {
            return gameBoard.every(cell => cell !== '');
        }

        function endGame(isDraw) {
            gameActive = false;
            if (isDraw) {
                status.innerText = "It's a draw!";
            } else {
                status.innerText = `Player ${currentPlayer} wins!`;
            }
        }

        function restartGame() {
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            status.innerText = "Player X's turn";
            cells.forEach(cell => {
                cell.innerText = '';
                cell.classList.remove('X', 'O');
            });
        }

        cells.forEach(cell => cell.addEventListener('click', handleCellClick));
        restartButton.addEventListener('click', restartGame);
