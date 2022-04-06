const container = document.querySelector('.container');
const button = document.querySelector('button');

// function resetState() {
//     container.removeChild(subContainer);
// }

function createRow() {
    
    subContainer = document.createElement('div');
    subContainer.className = "sub-container";

    for (i=0; i < 16; i++) {

        smallBox = document.createElement('div');
        smallBox.id = "box";

        subContainer.appendChild(smallBox);

    }

    container.appendChild(subContainer);


}

function fullGrid() {
    myRows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    myRows.forEach(() => {
        createRow();
    });
}

fullGrid();

button.addEventListener('click', clearBoard);


const boxes = document.querySelectorAll('#box');
Array.from(boxes).forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
});

function clearBoard() {
    Array.from(boxes).forEach((box) => {
        box.style.backgroundColor = 'white';
    });
}