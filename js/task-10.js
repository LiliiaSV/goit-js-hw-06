function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    divElement.style.width = `${30 + i * 10}px`;
    divElement.style.height = `${30 + i * 10}px`;
    divElement.style.background = getRandomHexColor();
    document.querySelector('#boxes').appendChild(divElement);
  };
}

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  let boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  };
}



