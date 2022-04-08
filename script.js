const button = document.querySelector('button');

const container = document.querySelector('.container');

button.addEventListener('click', fullGrid);

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
    container.innerHTML = "";
    let userInput = prompt('Pick a number for the grid: ');
    let myNewArray = [];

    for (i=1; i <= userInput; i++) {
        myNewArray.push([i]);
    }

    
    myNewArray.forEach(() => {
        createRow(userInput);
    });

    const boxes = document.querySelectorAll('.box');
    
    Array.from(boxes).forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });

    Array.from(boxes).forEach((box) => {
        box.style.backgroundColor = 'white';
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color =  '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}