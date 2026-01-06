let numOfSquares = 16;

let container = document.querySelector("#container");
container.style.height = "90vh";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

const main = document.createElement("main");
main.style.display = "flex";
main.style.border = "1px solid black";
main.style.flexWrap = "wrap";


let totalSquares = numOfSquares * numOfSquares;

for (let i = 1; i <= totalSquares; i++) {
    const grid = document.createElement("button");
    grid.classList.add("content");
    grid.id = `grid-${i}`;
    // grid.textContent= `${i}`
    // grid.style.color = "blue";
    grid.style.width = "20px";
    grid.style.height = "20px";
    grid.style.border='0.5px solid darkgray'

    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "#333333";
    });
    main.appendChild(grid);
}

main.style.width = `${numOfSquares * 20}px`;
container.appendChild(main);


const popupContainer= document.getElementById('popupContainer')
const openPopupBtn= document.getElementById('openPopupBtn')
const closeBtn= document.querySelector('.close-btn')

function openPopup()
{
    popupContainer.style.display= 'flex'
}

function closePopup()
{
    popupContainer.style.display= 'none'
}

openPopupBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

const myForm = document.getElementById('myForm');
const squareNumberInput= document.getElementById('squareInput');

myForm.addEventListener('submit', function(event)
{
    event.preventDefault();
    numOfSquares= parseInt(squareNumberInput.value)
    
    if (isNaN(numOfSquares) || numOfSquares <= 0 || numOfSquares>50) {
        alert("Oops! Enter a number from 1 to 50 only.");
        return;
    }
    console.log(numOfSquares)

    popupContainer.style.display = 'none';

    main.innerHTML=''
    totalSquares = numOfSquares * numOfSquares

    for (let i = 1; i <= totalSquares; i++) {
        const grid = document.createElement("button");
        grid.classList.add("content");
        grid.id = `grid-${i}`;
        // grid.textContent= `${i}`
        grid.style.color = "blue";
        grid.style.width = "20px";
        grid.style.height = "20px";
        // grid.style.border='0px'
    
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = getRandomColor();
        });
        main.appendChild(grid);
    }
    container=''
    main.style.width = `${numOfSquares * 20}px`;
    // container.appendChild(main);
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
