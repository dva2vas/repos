/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

var btn = document.getElementById('btnSaveColorStorage');

btn.addEventListener('click', setColor);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function setColor() {
  var rColor = getRandomIntInclusive(0, 255).toString(16);
  var gColor = getRandomIntInclusive(0, 255).toString(16);
  var bColor = getRandomIntInclusive(0, 255).toString(16);

  var colors = [rColor, gColor, bColor];
  
  colors.forEach(function(item) {
    if(item.length == 1) {
      item = 0 + item;
    }
  })

  document.body.style.background = '#' + rColor + gColor + bColor;
  localStorage.setItem('background', '#' + rColor + gColor + bColor); 
}

setColor();
