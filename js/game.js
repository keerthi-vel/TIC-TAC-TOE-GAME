const moves = [];
let turn = 0;
var p1 =0;
var p2 =0;
const play1 = document.querySelector('p.player1');
const play2 = document.querySelector('p.player2');
const c= document.querySelector('.board'); 
const boardValue = document.querySelectorAll('.cell');
for (let i = 0; i < boardValue.length; i++) {
    const cellButton = document.createElement('button');
    cellButton.classList.add("boxButton");
    cellButton.innerText = '';
    boardValue[i].appendChild(cellButton);
    boardValue[i].addEventListener('click', function (event){
        console.log(event);
        console.log(this.id);
        console.log('the id clicked on', this.getAttribute('id'));
        if (turn % 2 === 0 && turn < 9)
        {
            if (moves[this.id] !== 'O' && moves[this.id]!== 'X') 
            {
                moves[this.id] = 'X';
                this.innerText = 'X';
                console.log('Player1 is playing');
                if(moves[0] === 'X' && moves[1] === 'X' && moves[2] === 'X'|| moves[3] === 'X' && moves[4] === 'X' && moves[5] === 'X'|| moves[6] === 'X' && moves[7] === 'X' && moves[8] === 'X'|| moves[0] === 'X' && moves[3] === 'X' && moves[6] === 'X'|| moves[1] === 'X' && moves[4] === 'X' && moves[7] === 'X'|| moves[2] === 'X' && moves[5] === 'X' && moves[8] === 'X'|| moves[0] === 'X' && moves[4] === 'X' && moves[8] === 'X'|| moves[2] === 'X' && moves[4] === 'X' && moves[6] === 'X')
                {    p1 = p1+1;
                    //alert(" Player 1 wins");
                    console.log('Player 1 wins',p1);  
                    play1.innerText = "PLAYER 1 WON";
                    c.style.pointerEvents = 'none';
                }
            }
        }
        else
        {
            if (moves[this.id] !== 'X' && moves[this.id] !== 'O') 
            {
                    moves[this.id] = 'O';
                    this.innerText = 'O';
                    console.log('Player2 is playing');
                    if(moves[0] === 'O' && moves[1] === 'O' && moves[2] === '0'|| moves[3] === 'O' && moves[4] === 'O' && moves[5] === 'O'|| moves[6] === 'O' && moves[7] === 'O' && moves[8] === 'O'|| moves[0] === 'O' && moves[3] === 'O' && moves[6] === 'O'|| moves[1] === 'O' && moves[4] === 'O' && moves[7] === 'O'|| moves[2] === 'O' && moves[5] === 'O' && moves[8] === 'O'|| moves[0] === 'O' && moves[4] === 'O' && moves[8] === 'O'|| moves[2] === 'O' && moves[4] === 'O' && moves[6] === 'O')
                {   p2 = p2+1;
                    //alert(" Player2 wins");
                    console.log('player2 wins', p2);
                    play2.innerText = "PLAYER 2 WON";
                    c.style.pointerEvents = 'none';
                }
            }
        }    
        console.log(moves, 'moves');
        turn++;
        const win = document.getElementById('score');
    win.addEventListener('click',function(){
        if(p1>p2)
         {win.innerText="Player1 won game";
         }
        else if(turn===9 && p1===0 && p2===0){
            win.innerText = "draw";
            var drawpop = document.querySelector(".drawpopup");
           drawpop.style.display = "block";
           document.querySelector(".text").innerHTML = "TIE GAME!! NO ONE WINS!";
         }
         else{
            win.innerText = "Player2 won";
            }
        });
    },{once : true});
}
function restartf() {
    window.location.reload()
}
function choose1() {
    var person1 = prompt("Please choose your symbol", " ");
    if (person1 != null) {
      let k1 = document.getElementById("demo1").innerHTML = person1;
    }
  }
  function choose2() {
    var person2 = prompt("Please choose your symbol", " ");
    if (person2 != null) {
      let k2 = document.getElementById("demo2").innerHTML = person2;
      //"Player2 Symbol " +"Player1 Symbol " +
    }
  }
