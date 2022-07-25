class AlarmClock {
  constructor (){
		this.alarmCollection = [];
        this.timerId =  null;
	} 
  
  addClock (time, action, idAlarmCreated){
   
    if (idAlarmCreated === undefined){
   	  throw new Error("задайте параметр ID");
    }

    

    if (this.alarmCollection.some(alarmCollectionItem => alarmCollectionItem.id===idAlarmCreated)){
   	 console.error("звонок уже существует");
   	 return;
     }
  
   let alarm = {time: time, callback: action, id: idAlarmCreated};
   
   this.alarmCollection.push(alarm);
  
  }

  removeClock (id){
   try {
   	this.alarmCollection = this.alarmCollection.filter(alarmCollectionItem => alarmCollectionItem.id!==id);
   	return true;
   	 } catch (e){
   	return false;
   }
  }

  getCurrentFormattedTime() {
     let currentTime = new Date().toLocaleTimeString("ru", 
     	{hour: "2-digit", minute: "2-digit"});
     return currentTime;
    }
  
  start(){
  	function checkClock(alarm){
  		let currentTime = this.getCurrentFormattedTime();
  		if (alarm.time==currentTime){
  			alarm.callback();
  		}
  		
  	}

  	if (this.timerId==null){
  		this.timerId=setInterval(()=>this.alarmCollection.forEach(item=>{
  			let newCheckClock=checkClock.bind(this); 
  			newCheckClock(item);}), 3000); 
  	 }

  	}

  	
   stop (){
   	if (this.timerId!==null){
   		clearInterval(this.timerId); 
   		this.timerId=null;
   }
  }

  printAlarms (){
  	this.alarmCollection.forEach(item=>console.log(item.time, item.id));
  }

  clearAlarms (){
  	stop ();
  	this.alarmCollection = [];
  }

 }


function testCase(){

 phoneAlarm = new AlarmClock();

 	phoneAlarm.addClock("22:20", ()=>console.log('Подьем'), 100);


    phoneAlarm.addClock("22:21", ()=>{console.log("Пора"); 
    	phoneAlarm.removeClock(101);
    	}, 101);

    phoneAlarm.addClock("22:28", ()=> {
    	console.log("Доброе утро!");
    	phoneAlarm.printAlarms();
    	phoneAlarm.clearAlarms();
    	phoneAlarm.stop();
    	}, 103);

    phoneAlarm.start();

}





   

  
  






  
