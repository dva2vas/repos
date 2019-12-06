(function(){  
   var a = document.querySelector('#blockConstructor'), b = null;  // селектор блока, который нужно закрепить
             window.addEventListener('scroll', Ascroll, false);
      document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
function Ascroll() {
  if (b == null) { 
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) { 
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || 
          Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || 
          Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');  
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild); 
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) { 
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px'; 
    a.style.padding = '0';
    a.style.border = '0';  
  }
  if (a.getBoundingClientRect().top <= 0) { 
    // elem.getBoundingClientRect() возвращает в px координаты элемента относительно
    // верхнего левого угла области просмотра окна браузера
      b.className = 'sticky';
  } else {
    b.className = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);  // если изменить размер окна браузера, измениться ширина элемента
}
})()