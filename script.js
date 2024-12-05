const checkbox = document.querySelector('#divStyle');
console.log(checkbox);

let text = document.querySelectorAll('.textfield');
console.log(text);

let button1 = document.getElementById('button1');
console.log(button1);

let div = document.getElementsByClassName('tomDiv');
console.log(div);

function funktionEtt (e) {
    console.log('Avsändare: ', e.target);

    if (e.target.id === 'content') {
        const inputValue = e.target.value;
        const outputDiv = document.querySelector('.tomDiv');
        outputDiv.innerHTML = inputValue;
    }
}

const contentField = document.getElementById('content');
contentField.addEventListener('input', funktionEtt);

checkbox.addEventListener('change', (e) => {
    console.log('Checkbox ändrad: ', e.target.checked);

    if (e.target.checked) {
        handleClick(e);
    }
});

  


function handleClick(e) {
    e.preventDefault();
    const targetName = e.target.id;
    const colorField = document.getElementById('color');
    const contentField = document.getElementById('content');
    
    const newElement = document.createElement('div');
    newElement.classList.add('new-element');
    newElement.style.backgroundColor = colorField.value;
    newElement.innerHTML = contentField.value;
    
    const dynamicDisplay = document.querySelector('.tomDiv')
    dynamicDisplay.appendChild(newElement);
    console.log('Klickat element: ', targetName);

    }

    button1.addEventListener('click', (e) => {
        console.log('Färg borttagen: ', e.target);
    handleButton();
    });

    function handleButton () {
        document.getElementById('color').value = ``;
        document.getElementById('content').value = ``;

        const dynamicDisplay = document.querySelector('.tomDiv');
        dynamicDisplay.innerHTML = ``;
    }