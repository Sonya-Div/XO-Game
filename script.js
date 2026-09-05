let currentPlayer = 'X';
let isGameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
function boxClicked(index){
    if(gameState[index] == '' && isGameActive){
        gameState[index] = currentPlayer;
        document.getElementById('cell-' + index).innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (isGameActive) {
            document.getElementById('game-status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const lineClasses = [
    'horizontal-0', 'horizontal-1', 'horizontal-2',
    'vertical-0',   'vertical-1',   'vertical-2',
    'diagonal-0',   'diagonal-1'                  
];
function checkWinner(){
    let player = document.getElementById('winner-player');
    let winLine = document.getElementById('winning-line');
    for(let i = 0; i < winningConditions.length; i++){
        const [a, b, c] = winningConditions[i];
        if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
            isGameActive = false;
            const actualWinner = currentPlayer; 
            winLine.className = 'win-line';
            winLine.style.display = 'block';
            setTimeout(() => {
            winLine.classList.add(lineClasses[i]);
            }, 10); 
            setTimeout(() => {
            winLine.style.display = 'none'; 
            player.innerText = `🎉 Player ${actualWinner} wins!`;
            player.style.display = 'flex';
            }, 1500);
            return;
    } 
}
    if (!gameState.includes('') && isGameActive) {
        isGameActive = false;
        player.innerText =  "🤝 It's a Tie!";
        player.style.display = 'flex';
    }
}
function restartGame(){
    currentPlayer = 'X';
    isGameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('game-status').innerText = "Player X's turn";     
    let player = document.getElementById('winner-player');
    player.innerText = ''; 
    player.style.display = 'none';
    let winLine = document.getElementById('winning-line');
    winLine.style.display = 'none';
    winLine.className = 'win-line';
    for(let i = 0; i < 9; i++){
        document.getElementById('cell-' + i).innerText = '';
    }  
}

