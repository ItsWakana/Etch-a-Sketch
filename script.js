const button = document.querySelector('.button');
const container = document.querySelector('.container');
const heading = document.querySelector('h1');

button.addEventListener('click', fullGrid);

button.addEventListener('mouseover', () => {
    button.classList.add('button-fx');

    button.addEventListener('mouseout', () => {
        button.classList.remove('button-fx');
    });
});

container.addEventListener('mouseover', () => {
    container.classList.add('container-fx');

    container.addEventListener('mouseout', () => {
        container.classList.remove('container-fx');
    });
});

function createRow(input) {
    subContainer = document.createElement('div');
    subContainer.className = "sub-container";


    for (i=0; i < input; i++) {

        let smallBox = document.createElement('div');
        smallBox.className = "box";
        subContainer.appendChild(smallBox);

    }
    container.appendChild(subContainer);
}

function fullGrid() {

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }

    let userInput = prompt('Pick a number for the grid: ');
    if (userInput > 100) return fullGrid();

    heading.textContent = `Here is your ${userInput} x ${userInput} grid!`

    let myNewArray = [];

    for (i=1; i <= userInput; i++) {
        myNewArray.push([i]);
    }
    
    myNewArray.forEach(() => {
        createRow(userInput);
    });

    mouseOverFx();
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color =  '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mouseOverFx() {

    const boxes = document.querySelectorAll('.box');
    
    Array.from(boxes).forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });

    Array.from(boxes).forEach((box) => {
        box.style.backgroundColor = 'black';
    });
}

fullGrid();