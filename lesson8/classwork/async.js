/*
  Задание:
    Написать при помощи async-await скрипт, который:
    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:
    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button
    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.
*/
window.addEventListener("load",() => {

const сreateTable = async (link) => {
  const div = document.getElementById("tableJSON");
 // let vItem = {};
  let counter = 1;
  let strHTML = "";
  let table  = document.createElement("table");
  table.style.width = "100%";
  table.setAttribute('border', '1');
  strHTML+=`
  <thead>
    <tr>
      <th>#</th>
      <th>Company</th>
      <th>Balance</th>
      <th>Дата регистрации</th>
      <th>Адресс</th>
    </tr>
  </thead>
  `;
  strHTML+="<TBODY>";
  
  let prom = await fetch(link);
  let newJSON = await prom.json();
  newJSON.forEach( item => {
    let company = item.company;
    let balance = item.balance;
    let date = item.registered;
    let addres = item.address.country+" city:"+item.address.city+" street:"+item.address.street+" house:"+item.address.house;
    strHTML+="<tr>";
    strHTML+="<td>"+counter+"</td>";
    strHTML+="<td>"+company+"</td>";
    strHTML+="<td>"+balance+"</td>";
    strHTML+="<td><button>Показать дату</button><span hidden='true'>"+date+"</span></td>";
    strHTML+="<td><button>Показать Адресс</button><span hidden='true'>"+addres+"</span></td>";
    
    strHTML+="</tr>";
    counter++;
  });


  strHTML+="</TBODY>";
  table.innerHTML=strHTML;
  div.appendChild(table);
  
  const hiddenAttr = () => {
	  document.querySelectorAll("span").forEach(item =>
	  {
		  item.setAttribute("hidden","true");  
	  });
  }
  
  div.querySelectorAll("button").forEach(event =>{
    event.addEventListener("click",e => {
      hiddenAttr(); 
      e.target.parentNode.querySelector("span").removeAttribute("hidden");
    });
  });
  console.log(newJSON);
};

сreateTable("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");

});