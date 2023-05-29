console.log('principi.js loaded');

const button = document.getElementById('play');
const grid = document.getElementById('grid');


button.addEventListener('click', function(){
    grid_generation();
})

function grid_generation() {
    for(let i = 0; i < 100; i++){
        const square = createSquareElement(i)

        square.addEventListener('click', function (){
            this.classList.add('clicked');
            console.log(square.innerText)
        })
        grid.append(square);
    }
}

function createSquareElement(i){
    const square = document.createElement('div');

    square.classList.add('square');
    square.innerText = i + 1;

    return square
}