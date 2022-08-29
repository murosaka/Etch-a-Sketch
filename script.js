const container = document.querySelector('#container');
let row;
let cell;
let num; 
document.getElementById('grid').addEventListener("click", drawGrid);

function drawGrid (num) {
    num = prompt("Enter number", 16);
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {container.removeChild(row);}); 
    for (let i = 0; i < num; i++) {
        row = document.createElement('div');
        container.appendChild(row).className = 'row';
        for (let j = 0; j < num; j++) {
            cell = document.createElement('div');
            row.appendChild(cell).className = 'cell';
        }
    }
    let elements = document.querySelectorAll(".cell");
    elements.forEach(element => {
        element.addEventListener("mouseover", 
        () => element.setAttribute('style','background-color: black')); 
        element.addEventListener("click", 
        () => element.setAttribute('style','background-color: '));   
    });
}

