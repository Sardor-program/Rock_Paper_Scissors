window.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice'),
        score = document.querySelector('#score'),
        modal = document.querySelector('.modal'),
        result = document.querySelector('#result'),
        restart = document.querySelector('#restart'),
        scoreBoard = {
            player: 0,
            computer: 0,
            drow:0
        }
//Play game
    function  play (event) {
        restart.style.display = 'inline-block'
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice,computerChoice)
        showWinner(winner,computerChoice)


    }



//GetComputerChoice
    function getComputerChoice () {
        const rand = Math.random()
        if (rand < 0.34) {
            return 'rock'
        }else if (rand <= 0.67){
            return 'paper'
        }else{
            return 'scissors'
        }
    }



//getWinner
    function getWinner(p, c) {
        if (p === c) {
            return 'draw'
        }else if (p === 'rock') {
            if (c === 'paper') {
                return 'computer'
            }else{
                return 'player'
            }
        }else if (p === 'paper') {
            if (c === 'scissors') {
                return 'computer'
            }else{
                return 'player'
            }
        }else if (p === 'scissors') {
            if (c === 'rock') {
                return 'computer'
            }else{
                return 'player'
            }
        }
    }


//ShowWinner
    function showWinner (winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
            result.innerHTML = `
           <h1 class="text-win">You win </h1>
           <i class="fas fa-hand-${computerChoice} fa-10x"></i>
           <p>Computer Choice <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
        }else if (winner === 'computer') {
            scoreBoard.computer++
            result.innerHTML = `
           <h1 class="text-lose">You lose </h1>
           <i class="fas fa-hand-${computerChoice} fa-10x"></i>
           <p>Computer Choice <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
        }else{
            result.innerHTML = `
        <h1>It is a drow</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer choice <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
        }
        score.innerHTML = `
    <p>Player: ${scoreBoard.player} </p>
    <p>Computer: ${scoreBoard.computer}</p>
    `
        modal.style.display  = 'block'


    }


//Restart Game
    function  restartGame () {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
     <p>Player: ${scoreBoard.player} </p>
    <p>Computer: ${scoreBoard.computer}</p>
    `
    }


//CleareModal
    function cleareModal(event) {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    }



//Event listinears
    choices.forEach(choice => choice.addEventListener('click',play))
    window.addEventListener('click',cleareModal)
    restart.addEventListener('click',restartGame)

})














































































