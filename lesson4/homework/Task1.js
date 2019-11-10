

    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит возле каждого из не прошедшего валидацию
            сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */
	window.addEventListener("load", function () {

   validation = (event,mess) => {
    if( event.target.validity.tooShort  ){
        event.target.setCustomValidity(mess);
    } else {
        event.target.setCustomValidity('');
    }
   };

   var txtUser = document.getElementById("txtUser");
       txtUser.addEventListener("change",  event => {validation(event,"Как тебя зовут дружище?!")});

   var txtMail = document.getElementById("txtMail");
       txtMail.addEventListener("change",  event => {validation(event,"Ну и зря, не получишь бандероль с яблоками!")});

   var txtPass = document.getElementById("txtPass");
       txtPass.addEventListener("change",  event => {validation(event,"Я никому не скажу наш секрет")});

   var txtCount = document.getElementById("txtCount");
       txtCount.addEventListener("change",  event => {validation(event,"Ну хоть покушай немного... Яблочки вкусные")});

   var txtThank = document.getElementById("txtThank");
       txtThank.addEventListener("change",  event => {validation(event,"Фу, неблагодарный(-ая)!")});
   
   var btnValidate = document.getElementById("btnValidate");
   var formValidate = document.getElementById("formValid");
       btnValid.addEventListener("click", function(){
	                       formValid.checkValidity();
						   formValid.reportValidity(); });
   
});