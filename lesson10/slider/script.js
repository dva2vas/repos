// images
let listImages1 = ['img/tanks/1.jpg', 'img/tanks/2.jpg', 'img/tanks/3.jpg', 'img/tanks/4.jpg', 'img/tanks/5.jpg', 'img/tanks/6.jpg', 'img/tanks/7.jpg', 'img/tanks/8.jpg', 'img/tanks/9.jpg', 'img/tanks/10.jpg'];
let listImages2 = ['img/aircraft/1.jpg', 'img/aircraft/2.jpg', 'img/aircraft/3.jpg', 'img/aircraft/4.jpg', 'img/aircraft/5.jpg', 'img/aircraft/6.jpg', 'img/aircraft/7.jpg', 'img/aircraft/8.jpg', 'img/aircraft/9.jpg', 'img/aircraft/10.jpg'];
let listImages3 = ['img/ships/1.jpg', 'img/ships/2.jpg', 'img/ships/3.jpg', 'img/ships/4.jpg', 'img/ships/5.jpg', 'img/ships/6.jpg', 'img/ships/7.jpg', 'img/ships/8.jpg', 'img/ships/9.jpg', 'img/ships/10.jpg'];

let arrLength = 0;

// create blocks with images
function createBlock(arr, name) {
let blockName = document.getElementById(name);
arrLength = arr.length;
  var counter = 0;
    arr.forEach(function (img) {
     let strHTML = `<div><img src="${img}" class="imgBlockFrame" data-id="${counter}"></div>
        `;
        blockName.innerHTML += strHTML;
        counter ++;
    })
}
//------------------------------------------
createBlock(listImages1, 'listImages1');
createBlock(listImages2, 'listImages2');
createBlock(listImages3, 'listImages3');

function selectImage(id) {
    let arr = document.querySelectorAll(`#${document.getElementById('imgBigFrame').dataset.arrName}`)[0].children;
              document.getElementById('imgBigFrame').src = arr[id].children[0].src;
              document.getElementById('imgBigFrame').dataset.id = id;
}


document.getElementById('allBlocks').querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let div = event.target.parentElement.children[1].children[0];
        var step = -145;
        if (event.target.innerText === '<<') {
            if (div.dataset.click !== '0') {
                div.dataset.click --;
                div.style.marginLeft = `${ step*div.dataset.click}px`;
            } 
              else 
            {
                div.style.marginLeft = `0`;
                div.dataset.click ='7';
            }
        } 
        else 
        if (event.target.innerText === '>>') {
            if (div.dataset.click !== '7') {
                div.dataset.click ++;
                div.style.marginLeft = `${step * div.dataset.click}px`;
            } 
            else
            {
                div.style.marginLeft = `0`;
                div.dataset.click ='0';
            }
        }
    })
});

// --------- move big images
document.getElementById('imgBig').querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let idxImg = Number(document.getElementById('imgBigFrame').dataset.id);
        if (event.target.innerText === '<<') {
            if (idxImg !== 0) {
                idxImg --;
                selectImage(idxImg);
            } else {
                selectImage(arrLength-1);
            }
        } else if (event.target.innerText === '>>') {
            if (idxImg !== arrLength-1) {
                idxImg ++;
                selectImage(idxImg);
            } else {
                selectImage(0);
            }
        }
        console.log(arrLength-1);
    });
});


document.querySelectorAll('.imgBlockFrame').forEach((img) => {
    img.addEventListener('click', (event) => {
        document.body.classList.add('hidden');
        document.getElementById('imgFullScreen').style.display = 'block';
        document.getElementById('imgBigFrame').dataset.arrName = event.target.parentElement.parentElement.id;
        selectImage(Number(event.target.dataset.id));
    })
});

function close() {
    document.body.classList.remove('hidden');
    document.getElementById('imgFullScreen').style.display = 'none';
}

document.getElementById('imgFullScreen').addEventListener('click', (event) => {
    if (event.target.id === 'imgFullScreen') {
        close();
    }
});

document.getElementById('close').addEventListener('click', () => {
    close();
});