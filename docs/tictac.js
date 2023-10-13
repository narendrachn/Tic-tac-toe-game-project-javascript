"use strict"

(() => {
    window.addEventListener('load', (event) => {
      // ************************************************************************
      // #region Constants and Variables
  
      // Canvas references
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');

      // UI references
      const restartButton = document.querySelector('#restart');
      const undoButton = document.querySelector('#undo');
      const playerScoreText = document.querySelector('#score-text');

      // Constants
      const CELLS_PER_AXIS = 3;
      const CELL_WIDTH = canvas.width/CELLS_PER_AXIS;
      const CELL_HEIGHT = canvas.height/CELLS_PER_AXIS;
      const MAXIMUM_SCORE = CELLS_PER_AXIS * CELLS_PER_AXIS;

      // Game objects
      let grids;
      let playerScore = MAXIMUM_SCORE;

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

        





    }
    )


})();