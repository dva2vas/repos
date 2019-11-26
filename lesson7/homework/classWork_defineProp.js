/*
  Задание:
  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.
    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }
    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.
    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые
    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/
let superPowers = [
    { name:'Invisibility', spell: function(){ console.log( `${this.name} hide from you`)} },
    { name:'superSpeed', spell: function(){ console.log( `${this.name} running from you`)} },
    { name:'superSight', spell: function(){ console.log( `${this.name} see you`)} },
    { name:'superFroze', spell: function(){ console.log( `${this.name} will froze you`)} },
    { name:'superSkin',  spell: function(){ console.log( `${this.name} skin is unbreakable`)} },
  ];
  //
  class SuperDude {
    
    constructor(name,mas){
      this.name = name;
      mas.forEach(item => {
      Object.defineProperties(this, {
          [item.name]: {
            value: item.spell
          }
        });
      });
      
    }
    newSpell(name,spellFunc){
      Object.defineProperties(this, {
        [name]: {
          value: spellFunc
        }
      });
    }
    
    
  }
  //
  let Luther = new SuperDude('Luther',superPowers);
  //
  Luther.superFroze();
  Luther.superSight();
  Luther.Invisibility();
  Luther.superSpeed();
  Luther.newSpell("Poison",function(){ console.log( `${this.name} poisoned you`)} );
  Luther.Poison();