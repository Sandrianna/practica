const arr = ['blue', 'green', 'yellow', 'red', 'purple'];

function getRandomColor(){
  return arr[Math.floor(Math.random() * arr.length)];
}

function changeBackgroundColor(element) {
  const randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
}

document.querySelectorAll(".par").forEach(paragraph => {
  paragraph.addEventListener('click', () => changeBackgroundColor(paragraph));
});

setInterval(() => {
  document.querySelectorAll(".par").forEach(paragraph => changeBackgroundColor(paragraph));
}, 1000);

console.log("Скрипт подключен!");