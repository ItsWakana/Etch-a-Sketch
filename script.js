const container = document.querySelector('.container');
const button = document.querySelector('button');

// function resetState() {
//     container.removeChild(subContainer);
// }

function createRow(input) {
    
    subContainer = document.createElement('div');
    subContainer.className = "sub-container";

    for (i=0; i < input; i++) {

        smallBox = document.createElement('div');
        smallBox.id = "box";

        subContainer.appendChild(smallBox);

    }

    container.appendChild(subContainer);


}


function fullGrid() {
    let userInput = prompt('Pick a number for the grid: ');
    let myNewArray = [];

    for (i=1; i <= userInput; i++) {
        //mynewArray.push[i];
        myNewArray.push([i]);
    }

    //myRows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    myNewArray.forEach(() => {
        createRow(userInput);
    });
}

fullGrid();

button.addEventListener('click', clearBoard);


const boxes = document.querySelectorAll('#box');
Array.from(boxes).forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = getRandomColor();
    });
});

function clearBoard() {
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