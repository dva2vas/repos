    let posts = [];
    class Comment {
        constructor(id, author, text, date) {
            this.id = id;
            this.author = author;
            this.text = text;
            this.date = date;
        }
    }

    class Post {
        constructor(id, author, text, urlImg, date, like) {
            this.id = id;
            this.author = author;
            this.text = text;
            this.urlImg = urlImg;
            this.date = date;
            this.like = like;
            this.comments = [];
            this.addLike = function () {
                 return ++this.like
            };
            this.addComment = function (id, author, text, date) {
                let newCom = new Comment(id, author, text, date);
                this.comments.push(newCom);

                let context =
                    `
                    <div class="comment" data-id="${newCom.id}">
                        <div class="commentLine">
                            <div class="commentBlock">
                                <div class="commentHead">
                                    <div class="commentAuthor">
                                        ${newCom.author}
                                    </div>
                                    <div class="commentDate">
                                        ${newCom.date}
                                    </div>
                                </div>
                                <div class="commentText">
                                    ${newCom.text}
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                return context
            };
            this.showComment = function () {
                this.comments.forEach((comment) => {

                    let context =
                        `
                    <div class="comment" data-id="${comment.id}">
                        <div class="commentLine">
                            <div class="commentBlock">
                                <div class="commentHead">
                                    <div class="commentAuthor">
                                        ${comment.author}
                                    </div>
                                    <div class="commentDate">
                                        ${comment.date}
                                    </div>
                                </div>
                                <div class="commentText">
                                    ${comment.text}
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                })
            };
            this.render = function () {

                let context =
                    `
                        <div class="post" data-id="${this.id}">
                            <div class="postHead">
                                <div class="postAuthor">
                                    ${this.author}
                                </div>
                                <div class="postDate">
                                    ${this.date}
                                </div>
                            </div>
                            <img class="postImg" src="${this.urlImg}" alt="">
                            <div class="postText">
                                ${this.text}
                            </div>
                            <div class="postBtn">
                                <div class="postLike">
                                <form data-id="${this.id}">
                                    <button type="submit" class="likeBtn">
                                    <span class="likeText">
                                    <svg class="heart" viewBox="0 0 32 29.6">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                                    </svg>
                                    Likes: <span class="_like">${this.like}</span></span>
                                    </button>
                                </form>
                                </div>
                                <div class="postCountCom">
                                    Коментарів (<span>${this.comments.length}</span>)
                                </div>
                                <div class="postWriteCom">
                                    <button class="writeBtn">Записати коментар</button>
                                </div>
                            </div>
                            <div class="postComment hideComment">
                                <div class="comments">
                                </div>
                                <div class="addComment">
                                    <form class="formComment" data-id="${this.id}">
                                        <input id="authorComment" placeholder="Автор" required>
                                        <textarea id="textComment" placeholder="Коментар" required></textarea>
                                        <input type="submit" id="sendComment" value="Додати коментар">
                                    </form>
                                </div>
                            </div>
                            <hr>
                        </div>
                    `;
                document.getElementById('feed').innerHTML += context
            }
        }
    }
    document.getElementById('btnImg').addEventListener('click', () => {
        document.getElementById('Img').src = document.getElementById('urlImg').value;
    });
    //-------------------------
    function funcDate() {
        let date = new Date();
        let day = String(date.getDay()+1);
        let month = String(date.getMonth()+1);
        let year = String(date.getFullYear());
        let hours = String(date.getHours());
        let minutes = String(date.getMinutes());
        if (day.length === 1) {
            day = '0' + day
        }
        if (month.length === 1) {
            month = '0' + month
        }
        if (hours.length === 1) {
            hours = '0' + hours
        }
        if (minutes.length === 1) {
            minutes = '0' + minutes
        }
        return `${day}/${month}/${year} ${hours}:${minutes}`
    }
    //------------------------------------
    document.getElementById('formConstructor').addEventListener('submit', (event) => {
        event.preventDefault();
        let author = document.getElementById('author');
        let text = document.getElementById('text');
        let urlImg = document.getElementById('urlImg');
        let date = funcDate();
        let id = `${(+new Date).toString(16)}`;
        let like = 0;
        let newPost = new Post(id, author.value, text.value, urlImg.value, date, like);
        posts.push(newPost);
        newPost.render();
        selectBtnComment();
        author.value = '';
        text.value = '';
        urlImg.value = '';
    });
    //--------------------------------------------
    let author = 'https://uk.wikipedia.org/wiki';
    let text = `Украї́на  — держава, розташована в Східній та частково в Центральній Європі, у `+
               `південно-західній частині Східноєвропейської рівнини, держава-правонаступниця`+
               ` Української Радянської Соціалістичної Республіки. Площа становить 603 628 км². Найбільша за площею країна з тих,`+
               ` чия територія повністю лежить у Європі.[4] Межує з Білоруссю на півночі, `+
               `Польщею, Словаччиною та Угорщиною — на заході, Румунією та Молдовою — на південному заході, Росією на сході і північному сході. `+
               `На півдні і південному сході омивається Чорним і Азовським морями.`+
               `На сучасній території України відомі поселення багатьох археологічних культур, починаючи з доби палеоліту — мустьєрської, гребениківської,`+
               ` кукрецької, трипільської, середньостогівської, ямної, бойових сокир, чорноліської тощо. В античні часи на території України виникли державні утворення скіфів, `+
               `давньогрецьких колоністів, готів, але відправним пунктом української слов'янської державності й культури вважається Київська Русь IX—XIII століть[5].`+
               ` Після монгольської навали її спадкоємцем стало Руське королівство XIII—XIV століття[5]. Воно було поглинуте сусідніми Литвою та Польщею,`+
               ` об'єднаними з XVI століття у федеративну Річ Посполиту. `;
    let urlImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9BlbD2aEnNHF0oCWWPDBbspQ4vNqW68gJSiPRRdsz4shlTnK3w&s';
    let date = funcDate();
    let id = `${(+new Date).toString(16)}`;
    let like = 0;
    let newPost = new Post(id, author, text, urlImg, date, like);
        posts.push(newPost);
        newPost.render();

    function selectBtnComment() {
        document.querySelectorAll('.formComment').forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                let id = `${(+new Date).toString(16)}`;
                let author = event.target[0];
                let text = event.target[1];
                let date = funcDate();
                let idPost = event.target.dataset.id;
                console.dir(event.target.parentElement.parentElement.parentElement.children[3].children[1].children[0]);
                posts.forEach((post) => {
                    if (post.id === idPost) {
                        let newCom = post.addComment(id, author.value, text.value, date);
                        event.target.parentElement.parentElement.children[0].innerHTML += newCom;
                        event.target.parentElement.parentElement.parentElement.children[3].children[1].children[0].innerText = post.comments.length
                    }
                });
                author.value = '';
                text.value = '';
            });
        });
//--------------------------------------------------        
        document.querySelectorAll('.writeBtn').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.target.parentElement.parentElement.nextElementSibling.classList.toggle('hideComment')
                });
            });

        document.querySelectorAll('.postLike').forEach((btn) => {
            btn.addEventListener('submit', (event) => {
                event.preventDefault();
                let idPost = event.target.dataset.id;
                posts.forEach((post) => {
                    if (post.id === idPost) {
                        event.target[0].querySelector('._like').innerText = post.addLike();
                    }
                });
                event.target[0].disabled = 'True';
                event.target[0].classList.toggle('active');
                event.target[0].querySelector('.heart').classList.toggle('active');
            });
        });
    }
    selectBtnComment();