const gameTiles = document.querySelectorAll('.tile'); // pull out all the tiles
const gameBoard = document.querySelector('#game-board'); // we take out the boards
const gameState = [
  [gameTiles[0], gameTiles[1], gameTiles[2]],
  [gameTiles[3], gameTiles[4], gameTiles[5]],
  [gameTiles[6], gameTiles[7], gameTiles[8]],
];
gameBoard.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
});

