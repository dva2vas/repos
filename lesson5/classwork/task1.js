/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var objTrain = {};
    objTrain.name ='Train', 
	objTrain.speed =60,
	objTrain.countPas = 100,
	
	objTrain.runing =function(){
		   objTrain.speed=60;
		  console.log(this.name+' везет '+this.countPas+' пасажиров со скоростью '+this.speed);
	},
    
	objTrain.stoping =function(){
		this.speed =0;
		console.log(this.name+' остановился.'+' Скорость '+this.speed);
	},	
    objTrain.pass =function(x){
		this.countPas=this.countPas+x;
		console.log('В '+this.name+' садятся  '+this.countPas+' пасажиров.');
	}	
	
	console.log(objTrain);
	objTrain.runing();
	objTrain.stoping();
	objTrain.pass(123);
	objTrain.runing();
	objTrain.stoping();
	objTrain.pass(13);
    objTrain.runing();	
	/* 
	 */