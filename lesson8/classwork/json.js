/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда 
  ввели и выводит результат в консоль.
  Array.from(HTMLNodeColection); -> Arary
  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>
  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'
*/

window.addEventListener("load",() => {
  fmResult = document.getElementById("fmResult");
    fmMain = document.getElementById("fmMain");

    fmMain.addEventListener("submit",e => {
      e.preventDefault();
      if(fmMain.elements.name.value.length==0) alert("Введите имя");
        else
      if(fmMain.elements.age.value.length==0) alert("Введите возвраст");
        else
      if(fmMain.elements.password.value.length==0) alert("Введите пароль");
        else 
        {
          const objJSON = {};
                objJSON.name = fmMain.elements.name.value;
                objJSON.age = fmMain.elements.age.value;
                objJSON.password = fmMain.elements.password.value;
          const strJSON=JSON.stringify(objJSON);
          console.log(strJSON);
          fmResult.name.value = strJSON;
        };            
    });

  document.getElementById("btnParseJSON").addEventListener("click",e => {
    e.preventDefault();
    if(fmResult.elements.name.value.length==0)
          alert("Введите строку");
       else
          console.log(JSON.parse(fmResult.elements.name.value));
  });
});