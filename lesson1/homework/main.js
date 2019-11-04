/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
	function ChangeColor16(){
		  var RR = getRandomIntInclusive(0,255);
		  var GG = getRandomIntInclusive(0,255);
		  var BB = getRandomIntInclusive(0,255);
		  return '#'+RR.toString(16)+GG.toString(16)+BB.toString(16);
      }
var RGBcolor ='rgb('+getRandomIntInclusive(0,255)+','+getRandomIntInclusive(0,255)+','+getRandomIntInclusive(0,255)+')';
document.body.style.background=RGBcolor;
console.log(RGBcolor);

var myWidth = Math.floor(screen.width/2);
var myHeight = Math.floor(screen.height/2);
console.log(myWidth);
console.log(myHeight);
//----------------------------------------
var myElement = document.createElement('button');
  myElement.className = "classChangeColor";
  myElement.innerText = "CLICK ME :)";
  myElement.style.fontSize = "30px";
  myElement.style.fontColor = "white";
  myElement.style.height = "60px";
  myElement.style.width = "200px";
  myElement.style.top = myHeight-100+"px";
  myElement.style.left = myWidth-100+"px";
  myElement.style.position = "absolute";
  myElement.style.textAlign = "center";
  myElement.style.backgroundColor = ChangeColor16();
  document.body.appendChild(myElement);
  //-----------------------------------
  myElement.onclick = function() {
    var div=document.body.querySelector(".classChangeColor");
    var newColor =  ChangeColor16();
    div.style.backgroundColor = newColor;
    console.log(newColor);
  };