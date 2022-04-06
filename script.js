

function createRow() {
    
    const container = document.querySelector('.container');
    subContainer = document.createElement('div');
    subContainer.className = "sub-container";

    for (i=0; i<16; i++) {

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
