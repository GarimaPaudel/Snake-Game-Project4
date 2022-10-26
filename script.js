document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0;//so first div in our grid
    let appleIndex = 0;//so first div in our grid
    let currentSnake = [2,1,0]//so the first div in our grid becoming 2 (or the head) and 0 being the end or the (tail with all 1's) . 
    let direction = 1;
    let score =0
    let speed = 0.5
    let intervalTime = 0
    let interval = 0

//to start and restart the game
function startGame{
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    //randomApple()
    direction = 1;
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0
    currentSnake.forEach(index=> squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)

}




    //assign functions to keycodes
    function control(e){
        squares[currentIndex].classList.remove('snake')//we are removing the class of snake
        if(e.keyCode === 39){
            direction = 1;
        }
        else if(e.keyCode === 38){
            direction = -width
        }
        else if(e.keyCode === 40){
            direction = +width;
        }
    }

})