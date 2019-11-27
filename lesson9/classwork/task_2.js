/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
window.addEventListener("load",() => {
const div = document.getElementById("login"); 

const formShow = () => {
div.innerHTML = `
      <form id="fmLogin">
       <label for="inLogin">  
         <span>Користувач: </span>
         <input name="login" id="inLogin" type="text" />
       </label>
       <label for="idPass" >
          <span>Пароль: </span>
          <input name="password" type="password" id="inPass"/>
       </label>
      <button id="btnUserLogin" type="submit">Підключитися</button>
      </form>
          `;
};        
formShow();

const fmLogin = document.getElementById("fmLogin");
const checkLoginStorage = (e) =>{
    var login  = localStorage.getItem(e);
     return login;
  };

  const verifyLogin = (e) =>{
    var pass  = localStorage.getItem(e);
    if (fmLogin.elements.inPass.value !== pass)
    {pass = 'false'}
    else
    {pass = 'true'};
    console.log(pass);
     return pass;
  };

document.getElementById('btnUserLogin').addEventListener("click", e => {
   e.preventDefault();
   
   if (fmLogin.elements.inLogin.value == '') {alert("Вкажіть логін!")}
   else
     if (fmLogin.elements.inLogin.value == '') {alert("Вкажіть пароль!")}
      else
   { 
   if (checkLoginStorage(fmLogin.elements.inLogin.value) !== null)
    {
    var txt = document.createElement('div');
    if (verifyLogin(fmLogin.elements.inLogin.value) =='true')
       { 
         fmLogin.remove();
         txt.innerHTML=`<p>ПРИВЕТ+${fmLogin.elements.inLogin.value}</p>`; 
         div.appendChild(txt);
       }
     else
      {alert("Неправильний пароль!")};
    }
    else
    {
    alert ("Необхідна реєстрація!");
    localStorage.setItem(fmLogin.elements.inLogin.value,fmLogin.elements.inPass.value); 
    alert ("Реєстрація пройшла успішно!");
    alert ("Оновіть сторінку!");
    };
}; 
 });

});

