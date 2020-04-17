
var exampleArray = [10, 5];


let averageArray = (arr) =>{
    //average of array
    let current;
    let total = 0;
    let average = 0;
    for (i = 0; i < arr.length; i++){
        current = arr[i];
        total += current;
        
    }
    average = total / arr.length;
    return average;
}


console.log(averageArray(exampleArray));