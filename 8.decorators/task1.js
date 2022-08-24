function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item)=> item.hash==hash);
    if (idx !== -1){
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }

    let result = func.call(this,...args);
    cache.push({hash:hash, value:result});

    if (cache.length > 5) { 
       cache.shift();
     }
     
     console.log("Вычисляем: " + result);
     return "Вычисляем: " + result;  
     }
    return wrapper;
  
 }


 

function debounceDecoratorNew(func, ms) {
  
  let flag;   

  return function (...args) { 
  
   if (flag==1){
     return;
     }

  func.apply(this, args);

  flag=1;

  setTimeout(() => flag=0, ms); 

 }
}

   
function debounceDecorator2(func, ms) {

  let flag; 
  wrapper.count=0;  

  function wrapper(...args){ 
  
  wrapper.count++;

   if (flag==1){
     return;
  }

  func.apply(this, args);

  flag=1;

  setTimeout(() => flag=0, ms);

 }

  return wrapper; 

 }
  

