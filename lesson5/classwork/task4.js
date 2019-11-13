/*
  Задание "Шифр цезаря":
    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F
    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.
    Написать функцию дешефратор которая вернет слово в изначальный вид.
    Сделать статичные функции используя bind и метод частичного вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.
    const isMobile = document.innerWidth < 768;
    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)
      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)
      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾
*/

window.addEventListener('load', function () {

   let resWord = '';
   let inWord = 'Мы изучаем JavaScript advanced!';

cryptWord = (countChar,inText) => {
  let rezStr = '';
  let newCharCode =0;

  for (var i=0; i<=inText.length-1; i++){
	  newCharCode = inText[i].charCodeAt()+countChar;
	  rezStr = rezStr+String.fromCharCode(newCharCode);
  }      
  return rezStr;
};

 decryptWord = (countChar,inText) => {
  let rezStr = '';
  let newCharCode =0;
  for (var i=0; i<=inText.length-1; i++){
	   newCharCode =inText[i].charCodeAt()-countChar;
	   rezStr = rezStr+String.fromCharCode(newCharCode);
  }    
  return rezStr;
};

	cryptWordBind = cryptWord.bind(null, 5);
	decryptWordBind = decryptWord.bind(null, 5);

	console.log('Входящий текст : '+inWord);
	resWord = cryptWord(2,inWord);
	  console.log('Зашифрованый текст: '+resWord);
	resWord = decryptWord(2,resWord);
      console.log('Расшифрованный текст : '+resWord);

    resWord = cryptWordBind(inWord);
      console.log('Зашифрованая строка (bind) : '+resWord);
    resWord = decryptWordBind(resWord);
      console.log('Расшифрованая строка (bind) : '+resWord);	
});