document.addEventListener("DOMContentLoaded", function () {
    const gContainer = document.querySelector(".game-container");
    const boxes = document.querySelectorAll(".cell");
    const resetBtn = document.querySelector(".reset-button");

    let currentPlayer = 'X';
    let gameOver = false;

    //Players Functionality
    boxes.forEach(box => {
        box.addEventListener("click", function () {
            if (!box.textContent && !gameOver) {
                box.textContent = currentPlayer;
                if (winCheck(currentPlayer)) {
                    alert(`Winner is: ${currentPlayer}`);
                    gameOver = true;
                }
                else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : "X";
                }
            }
        });
    });
    //Reset Functionality
    resetBtn.addEventListener("click", function () {
        boxes.forEach(box => {
            box.textContent = "";
        });
        currentPlayer = 'X';
        gameOver = false;
        playerTextContainer.textContent = ""; // Clear the text
        playerTextContainer.style.display = 'block';
    });
    //Winner Functionality
    let winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    function winCheck(player) {
        return winCombinations.some(combination => {
            return combination.every(index => boxes[index].textContent === player);
        });
    }
    // Player Turn Functionality
    const playerTextContainer = document.createElement('div');
    playerTextContainer.classList.add('message');
    gContainer.appendChild(playerTextContainer);


    boxes.forEach(text => {
        text.addEventListener("click", function () {
            playerTextContainer.textContent = `Next Turn : Player ${currentPlayer}`;
        });
        resetBtn.addEventListener("click", function () {
            playerTextContainer.textContent = "";
        });

    });

});