//veryhard

//sudo code

//logical steps:
//create an array literal
//loop through array containing sentence and for every element that repeats push that element to the empty array

    //algo for finding repeating elements

//for loop an array.indexOf for the current element you are on and then implement a counter that will increment everytime that element is found
//if that counters value is more than 1 the element repeats
//push it to our array literal

        //end


//then reloop through the array
//check if the current index your own is inside of the array that we pushed all our repeating letters to
//if it is continue to the next index
//if it is not and then this is the first non repeating letter 
// return it




let veryHard = (sentence) =>{
    let counter = 0;
    arr = sentence.split('');
    for(i = 0; i < arr.length; i++){
        
        for(n = 0; n < arr.length; n++){
        if (arr[i] === arr[n])
            counter ++;
            console.log(arr[i]);
        }
            if (counter > 1){
                counter = 0;
                continue;
            }
           else{
               return arr[i];
           }
        }
    }



console.log(veryHard('what a wonderful day it has been!'));