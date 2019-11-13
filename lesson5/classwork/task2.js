/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
window.addEventListener("load", function () {
 const colors = {
    background: 'purple',
    color: 'white'
  }

  function myCall( color ){
	 let div;
	     div = document.createElement("div");
         div.innerHTML="<h1>"+"I know how binding works in JS"+"</h1>";
         document.querySelector("body").appendChild(div);
		 
         document.body.style.background = this.background;
         document.body.style.color = color;	 
   }
   
   function myBind (){
    this.background = "blue";
    this.color = "white";

    document.body.style.background = this.background;
    document.body.style.color = this.color;
   };

   function myApply (title){
    this.title =  title;
    document.title = this.title;
   };

   myCall.call(colors,"green");
   myApply.apply( colors, ["NEW TITLE"] );
  setTimeout(() =>  { myBind.bind( colors )() }, 1000);
});
