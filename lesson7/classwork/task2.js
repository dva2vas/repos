
// Програма створена за підтримки та консультації Кущенко О.В. :-)

window.addEventListener("load",() => {
masMessage = [];
//----------------------------------------
const btnAddMess = event => {
  
  const div = event.target.parentNode.querySelector(".clAddMsg"); 
  div.innerHTML = `
        <form id="fmMain">
         <label for="idAuthor">
           <span>Автор повідомлення</span>
           <input type="text" name="nmAuthor" id="idAuthor">
         </label>
         <label for="message" id="lableMessage">
           <span id="spanMessage">Текст повідомлення</span>
           <textarea placeholder="Your Message" id="message" name="txtMessage"></textarea>
         </label>
           <button type="submit">Відправити повідомлення</button>
           <button id="btnClose">Закрити</button>
        </form>
            `;
//----------------------------------------------------------
  const fmMain = document.getElementById("fmMain");
  event.target.parentNode.querySelector("#btnClose").addEventListener("click",e => {fmMain.remove()});
  fmMain.addEventListener("submit",e => {
    e.preventDefault();
    if(fmMain.elements.nmAuthor.value.length==0) alert("Вкажіть автора");
      else
    if(fmMain.elements.txtMessage.value.length==0) alert("Відсутній текст повідомлення");
      else
      {
        new Message(fmMain.elements.nmAuthor.value, fmMain.elements.txtMessage.value);
        showAllMessage();
        fmMain.remove();
      };
      
  });
};
//---------------------------------------------------------
const deleteMessage = (deleteID,arrMessage) => {
  let idx = 0;
  arrMessage.forEach(item => {
    if(deleteID == item.id) arrMessage.splice(idx, 1);
    deleteMessage(deleteID,item.answers);
    idx++;
  });
};


//--------------------------------------------------------
const listMessage = document.getElementById("message_list");
  const btnAddComment = event => {
    const vID =  event.target.parentNode.parentNode.id;
    const div = event.target.parentNode.parentNode.querySelector(".clAddMsg"); 
    div.innerHTML = `
        <form id="fmMain">
           <label for="idAuthor">
             <span>Автор повідомлення</span>
             <input type="text" name="nmAuthor" id="idAuthor">
           </label>
        <label for="message" id="lableMessage">
             <span id="spanMessage">Текст повідомлення</span>
             <textarea placeholder="Your Message" id="message" name="txtMessage"></textarea>
        </label>
            <button type="submit">Відправити повідомлення</button>
            <button id="btnClose">Закрити</button>
        </form>
            `;
//-----------------------------------------------------------            
    const fmMain = document.getElementById("fmMain");
    event.target.parentNode.querySelector("#btnClose").addEventListener("click",e => {fmMain.remove()});
    fmMain.addEventListener("submit",e => {
      e.preventDefault();
      if(fmMain.elements.nmAuthor.value.length==0)alert("Вкажіть автора ");
        else
      if(fmMain.elements.txtMessage.value.length==0)alert("Відсутній текст повідомлення");
        else{
          new Answer(fmMain.elements.nmAuthor.value,fmMain.elements.txtMessage.value,vID);
          showAllMessage();
          fmMain.remove();
        };            
    });
  };
//------------------------------------------------------------
  const addMessageHTML = (item,elem) => {
    const liMessage = document.createElement("li"); 
    liMessage.id = item.id;
    let strHTML  = `
        <div class="message__date" >
            ${item.date}
        </div>
        <div class="message__author">
            <b>${item.author}</b>
        </div>
        <div class="message__text">
            ${item.text}
        </div>
        <div class="message__controls"> 
        <button class="_skipMessage">Видалити</button>`;
        if(!item.parentId>0)strHTML+=`<button class="_answerMessage">Додати коментар</button>`;
        strHTML+=`
        <div>
        <div class="clAddMsg"></div>
            <ul class="divAnswer">
            </ul>
        </div>
        </div>`;
        liMessage.innerHTML = strHTML;
    elem.appendChild(liMessage);
    if(!item.parentId>0)  
    liMessage.querySelector("._answerMessage").addEventListener("click",event => btnAddComment(event));
    
    liMessage.querySelector("._skipMessage").addEventListener("click",event => {
      deleteMessage(event.target.parentNode.parentNode.id,masMessage);
      showAllMessage();
    }
    );
//-----------------------------------------------------  
    const divAnswer = liMessage.querySelector(".divAnswer");
    divAnswer.innerHTML = "";
    item.answers.forEach(item => addMessageHTML(item,divAnswer));
};
//-----------------------------------------------------
const showAllMessage = () => {
  listMessage.innerHTML = "";
    masMessage.forEach(item => addMessageHTML(item,listMessage));
};
 
//-------------------------------------------------       
 class Message{
  constructor( author, text){
    this.author = author;
    this.text = text;
    this.date = new Date();
    this.id = Date.parse(this.date);
   
    this.answers = [];
    if(this.constructor == Message)
      masMessage.push(this);
  }
  AnswerMessage(){}
  SendAnswer(){}
  SkipMessage(){}
};

class Answer extends Message{
  constructor( author, text, parentId){
    super( author, text);
    this.parentId = parentId;
    masMessage.forEach(element => {
      if(element.id==this.parentId){
         element.answers.push(this);
        return;
      };
    });
  }
  
};

document.getElementById("btnAddMess").addEventListener("click",btnAddMess);
new Message("Автор 1","Текст повідомлення 1");
showAllMessage();
});