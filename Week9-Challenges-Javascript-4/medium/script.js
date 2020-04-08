var arr = [1,2,5,8,4,7];
var target = 5;
 function medIndex(arr, target) {
        //check if element exist in array
   if (arr.indexOf(target) != -1) {
       return arr.indexOf(target);
   }
   else{
       return -1;
   }
};
console.log(medIndex([1,2,5,8,4,7], 5));