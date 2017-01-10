 function breakOut(array, changeValue, stopValue){
   for (let i = 0; i < array.length; i++){
     if (array[i] == stopValue){ break; }
     array[i] = changeValue;
   }
   return array;
 }

 function keepGoing(array, changeValue, skipValue){
   for (let i = 0; i < array.length; i++){
     if (array[i] == skipValue){ continue; }
     array[i] = changeValue;
   }
   return array;
 }

 function findBy(array, findFn){
   var rVal = null;
   array.forEach(function(elem){
     if (findFn(elem)){
       rVal = elem;
     }
   })
   return rVal;
 }
