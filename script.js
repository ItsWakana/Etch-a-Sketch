const button = document.querySelector('.button');
const container = document.querySelector('.container');
const heading = document.querySelector('h1');
main = document.querySelector('.main');

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

function createMenu() {

    buttonContainer = document.createElement('div');
    buttonContainer.classList = 'button-container';

    btnContainerSml = document.createElement('div');
    btnContainerSml.clasList = 'button-container';

    blackColor = document.createElement('div');
    rainbow = document.createElement('div');
    clearBoard = document.createElement('div');

    blackColor.classList = 'button';
    rainbow.classList = 'button';
    clearBoard.classList = 'button';

    blackColor.textContent = 'Black Paint';
    rainbow.textContent = 'Rainbow Paint';
    clearBoard.textContent = 'Clear Board';

    main.appendChild(buttonContainer);

    buttonContainer.appendChild(btnContainerSml);

    btnContainerSml.appendChild(blackColor);
    btnContainerSml.appendChild(rainbow);
    buttonContainer.appendChild(clearBoard);

    buttons = document.querySelectorAll('.button');

    Array.from(buttons).forEach((button) => {
        button.addEventListener('mouseover', () => {
            button.classList.add('button-fx');
        });

        button.addEventListener('mouseout', () => {
            button.classList.remove('button-fx');
        })
    });

    blackColor.addEventListener('click', mouseOverFxBlack);
    blackColor.addEventListener('click', () => {
        blackColor.classList.add('button-fx2');
        rainbow.classList.remove('button-fx2');
    });
    rainbow.addEventListener('click', mouseOverFxColor);
    rainbow.addEventListener('click', () => {
        rainbow.classList.add('button-fx2');
        blackColor.classList.remove('button-fx2');
    });

    button.addEventListener('click', () => {
        rainbow.classList.remove('button-fx2');
        blackColor.classList.remove('button-fx2');
    });

    clearBoard.addEventListener('click', boardClear);

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
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color =  '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mouseOverFxBlack() {

    const boxes = document.querySelectorAll('.box');
    
    Array.from(boxes).forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        });
    });
}

function boardClear() {

    const boxes = document.querySelectorAll('.box');
    
    Array.from(boxes).forEach((box) => {
            box.style.backgroundColor = 'white';
    });
}

function mouseOverFxColor() {

    const boxes = document.querySelectorAll('.box');
    
    Array.from(boxes).forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });
}

fullGrid();

createMenu();