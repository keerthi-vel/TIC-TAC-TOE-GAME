const moves = [];
let turn = 0;
var p1 =0;
var p2 =0;
let p1var = "X";
let p2var = "O";
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
            if (moves[this.id] !== p2var && moves[this.id]!== p1var) 
            {
                moves[this.id] = p1var;
                this.innerText = p1var;
                console.log('Player1 is playing');
                if(moves[0] === p1var && moves[1] === p1var && moves[2] === p1var|| moves[3] === p1var && moves[4] === p1var && moves[5] === p1var|| moves[6] === p1var && moves[7] === p1var && moves[8] === p1var|| moves[0] === p1var && moves[3] === p1var && moves[6] === p1var|| moves[1] === p1var && moves[4] === p1var && moves[7] === p1var|| moves[2] === p1var && moves[5] === p1var && moves[8] === p1var|| moves[0] === p1var && moves[4] === p1var && moves[8] === p1var|| moves[2] === p1var && moves[4] === p1var && moves[6] === p1var)
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
            if (moves[this.id] !== p1var && moves[this.id] !== p2var) 
            {
                    moves[this.id] = p2var;
                    this.innerText = p2var;
                    console.log('Player2 is playing');
                    if(moves[0] === p2var && moves[1] === p2var && moves[2] === '0'|| moves[3] === p2var && moves[4] === p2var && moves[5] === p2var|| moves[6] === p2var && moves[7] === p2var && moves[8] === p2var|| moves[0] === p2var && moves[3] === p2var && moves[6] === p2var|| moves[1] === p2var && moves[4] === p2var && moves[7] === p2var|| moves[2] === p2var && moves[5] === p2var && moves[8] === p2var|| moves[0] === p2var && moves[4] === p2var && moves[8] === p2var|| moves[2] === p2var && moves[4] === p2var && moves[6] === p2var)
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
    setTimeout(function(){ window.location.reload() }, 800);
    
}
function choose1() {
    var person1 = prompt("Please choose your symbol", " ");
    if (person1 != null) {
        p1var = document.getElementById("demo1").innerHTML = person1;
    }
  }
  function choose2() {
    var person2 = prompt("Please choose your symbol", " ");
    if (person2 != null) {
      p2var = document.getElementById("demo2").innerHTML = person2;
    }
  }
