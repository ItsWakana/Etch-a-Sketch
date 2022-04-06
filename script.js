
// const container = document.querySelector('.container');

// newDiv = document.createElement('div');

// container.appendChild(newDiv);

// newDiv.textContent = "wassup";

for (i=0; i<16; i++) {
    newDiv = document.createElement('div');
    newDiv.id = "box";

    document.querySelector('.container').appendChild(newDiv);
    newDiv.textContent = "wassup"
}