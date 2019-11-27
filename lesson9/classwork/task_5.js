  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */
 window.addEventListener("load",()=>{

var bthRegExp = document.getElementById("btnRegExp");
var blockRegExp = document.getElementById("stringResult");
var blockStringBegin = document.getElementById("stringBegin");

btnRegExp.addEventListener('click',()=>{
  var pattern = "";

   pattern = /\w+/gim; //1. все слова
  // pattern = /[a-e]/gm;//2. Все совпадения букв от a до e
  // pattern = /[1-9]\d\d\d/gim;//3. Года, например 2004
  // pattern = /\[\w+\]/gim; //4. Слова обернутые в [квадратныеКавычки]
  // pattern = /\.jpg|\.png|\.gif/gim; //5. Все форматы файлов .jpg / .png / .gif
  // pattern = /(\w+)@(?:[a-z0-9][-a-z0-9]+\.)+[\.com.ua]{1,}/gim;//6. Все email com.ua
  // pattern = /[A-Z]\w+/gm; //7. все слова с большой буквы
  // pattern = /\+\d\d\s.\d\d\d.\s\d\d\d\-\d\d\-\d\d/gim;//8. Найти телефон написаный по паттерну +00 (000) 000-00-00, где вместо 0 может быть любое число
  
  console.log(pattern);
  var result = blockStringBegin.value.match(pattern);
  blockRegExp.value = result;
   });
 });