const moves = [];
let turn = 0;
const boardValue = document.querySelectorAll('.cell');
// loop through boardValue, each time it will give us a DOM element, console.log each element
for (let i = 0; i < boardValue.length; i++) {
    const cellButton = document.createElement('button');
    cellButton.innerText = '';
    boardValue[i].appendChild(cellButton);
    boardValue[i].addEventListener('click', function (event){
        console.log(event);
        console.log(this.id);
        console.log('the id clicked on', this.getAttribute('id'));
        if (turn % 2 === 0)
        {
            if (moves[this.id] !== 'O' && moves[this.id]!== 'X') 
            {
                moves[this.id] = 'X';
                this.innerText = 'X';
                console.log('player1 is playing');
                if(moves[0] === 'X' && moves[1] === 'X' && moves[2] === 'X'|| moves[3] === 'X' && moves[4] === 'X' && moves[5] === 'X'|| moves[6] === 'X' && moves[7] === 'X' && moves[8] === 'X'|| moves[0] === 'X' && moves[3] === 'X' && moves[6] === 'X'|| moves[1] === 'X' && moves[4] === 'X' && moves[7] === 'X'|| moves[2] === 'X' && moves[5] === 'X' && moves[8] === 'X'|| moves[0] === 'X' && moves[4] === 'X' && moves[8] === 'X'|| moves[2] === 'X' && moves[4] === 'X' && moves[6] === 'X')
                {
                console.log('player1 wins');
                }
            }
        }
        else
        {
            if (moves[this.id] !== 'X' && moves[this.id] !== 'O') 
            {
                    moves[this.id] = 'O';
                    this.innerText = 'O';
                    console.log('player2 is playing');
                    if(moves[0] === 'O' && moves[1] === 'O' && moves[2] === '0'|| moves[3] === 'O' && moves[4] === 'O' && moves[5] === 'O'|| moves[6] === 'O' && moves[7] === 'O' && moves[8] === 'O'|| moves[0] === 'O' && moves[3] === 'O' && moves[6] === 'O'|| moves[1] === 'O' && moves[4] === 'O' && moves[7] === 'O'|| moves[2] === 'O' && moves[5] === 'O' && moves[8] === 'O'|| moves[0] === 'O' && moves[4] === 'O' && moves[8] === 'O'|| moves[2] === 'O' && moves[4] === 'O' && moves[6] === 'O')
                {
                console.log('player2 wins');
                }
            }
        }    
        console.log(moves, 'moves');
        turn++;
    });
}


function restartf() {
    window.location.reload()
}