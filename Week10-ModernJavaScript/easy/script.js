// write a function that takes in an array of numbers and outputs the maximum number.
//2 nested loop
function maxNum(arr) {
    var greatest = 0;
    for(i = 0; i < arr.length; i++) {
    
        for (n= i + 1; n < arr.length; n++) {
            if (arr[n] >= arr[i]){
                if(arr[n] >= greatest) {
                    greatest = arr[n];
                }
            }
        }
    }
    return greatest;
}


console.log(maxNum([1,2,3]));