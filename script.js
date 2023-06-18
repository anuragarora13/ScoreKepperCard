



const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2')
}


let winningScore=3;
let isGameOver = false;
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playto");

function updateScore(player, opponent) {    
    
    if (!isGameOver) {
      
        player.score += 1;
        if (player.score === winningScore) {


            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        
        }
        player.display.innerText = player.score;
    }
   
}




p1.button.addEventListener('click', () => {
   

    console.log("clickes")
    updateScore(p1, p2);

   

})


p2.button.addEventListener('click', () => {
   
    updateScore(p2, p1);

})



function reset()
{
    
    isGameOver = false

    for (let p of [p1, p2])
    {
        
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
   
 
   

}

resetButton.addEventListener("click",reset )

winningScoreSelect.addEventListener("change",function (e)  {
    
    winningScore = parseInt(this.value);
    reset();

})