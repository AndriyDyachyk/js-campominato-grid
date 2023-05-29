console.log('principi.js loaded');

const button = document.getElementById('play');
const grid = document.getElementById('grid');


button.addEventListener('click', function(){
    startGame();
})

function startGame (){
    const difficulty = parseInt(document.getElementById('difficulty').value);

    grid.innerHTML = '';

    let squaresNumber;
    switch(difficulty){
        case 1:
            squaresNumber = 100;
            break;
        case 2:
            squaresNumber = 81;
            break;
        case 3:
            squaresNumber = 49;
            break;
    }
    grid_generation(squaresNumber);
}


function grid_generation(squares, i) {
    for(let i = 0; i < squares; i++){
        const square = createSquareElement(squares, i)

        square.addEventListener('click', function (){
            this.classList.add('clicked');
            console.log(square.innerText)
        })
        grid.append(square);
    }
}

function createSquareElement(squares,i){
    const square = document.createElement('div');

    let squaresPerRow = Math.sqrt(squares);

    square.classList.add('square');
    square.style.width = `calc(100% / ${squaresPerRow}`;
    square.style.height = square.style.width;
    square.innerText = i + 1;

    return square
}