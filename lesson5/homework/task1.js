/*
  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/

function Comment(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  if (avatarUrl) this.avatarUrl = avatarUrl;
  this.likes = 0;
}

Comment.prototype = {
  avatarUrl: './images/cat8.jpg',
  addLike: function(){
    this.likes++;
  }
}

let comment1 = new Comment('first', 'first test comment goes here');
let comment2 = new Comment('second', 'second test comment', './images/cat2.jpg');
let comment3 = new Comment('third', 'third test comment', './images/cat3.jpg');
let comment4 = new Comment('fourth', 'fourth test comment', './images/cat4.jpg');

let Comments = [comment1, comment2, comment3, comment4];

let commentsContainer = document.getElementById('CommentsFeed');

function Avatar(Comments){
  this.Comments = Comments; 
 console.log(document.querySelectorAll('table').length);
  this.Render = function(){
    this.Comments.forEach( comment => {
  	 let table = document.createElement('tb')      
      table.innerHTML=`<table><tr><td>'${comment.name}'</td></tr><tr><td><img src='${comment.avatarUrl}'></td></tr><tr><td>'${comment.text}'</td></tr></table>`;
      commentsContainer.appendChild(table);      
    })
  }
  this.Render();
}

let avatars = new Avatar(Comments);


