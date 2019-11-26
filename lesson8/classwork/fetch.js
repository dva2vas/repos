/*
  Задача:
  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2
  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }
     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:
      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )
  5. Вывести результат на страничку
  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.
*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
window.addEventListener("load",() => {
  const div = document.getElementById("listJSON");
  fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
  .then(res1 => res1.json())    
  .then(res1 => {
      return res1[Math.floor(Math.random()*res1.length)];
  })
  .then(res1 => {
      return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
          .then(res2 => res2.json())
          .then(res2 => {
              let obj = {};
              obj.name = res1.company;
              obj.friends = res2[0].friends.map( item => item.name);

              console.log(obj);

              div.innerHTML =  `<h1>${obj.name}</h1><p> Friends: ${obj.friends}</p>`;
          })
  });
});