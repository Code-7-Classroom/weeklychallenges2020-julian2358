// VERY HARD: You are given a coins array of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  
// Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1





//sudo code

// will need to itterate through array, possibly subtract from the amount with the goal of reaching 0 in as few moves as possible
// for i in arr
// arr[i] = largest
// if largest < amount
// for( var n = i + 1; n < array.length; n++){
// if(largest < array[n]) {
 //   largest = array[n];
  //  }}

// so far i have it able to find the largest number  






  function veryHard(arr, amount){
    var largest;
    
    var counter = 0;


//the nested loops below will find the greatest element by looping through an array twice and comparing those instances against each other

//exmaple (first itteration): [1],2,3,4,5   1,[2],3,4,5  
//example (second itteration): [1],2,3,4,5  1,2,[3],4,5
//example (thrid itteration): [1],2,3,4,5   1,2,3,[4],5 
// 


    //itterate through coin array
    for (i = 0; i < arr.length; i++){
        
      largest = arr[i];
      
      
        
      // if the current coin is less than the amount
        if (largest <= amount){

            //itterate through the coin array starting from the element + 1 ahead
     for(n = i + 1; n < arr.length; n++){
         // check the first elements you retrieved against the second element
        
       if(largest <= arr[n]){
   // if the second element is greater or equal 
  // then check if that second elements is also less than or equal to the amount (cant subtracter a number from amount thats greater than amount)
           if (arr[n] <= amount)

    //if passes all the checks then second element is our current greatest array element, so set largest equal to its value
         largest = arr[n]
       }
       else{
           //otherwise the second element is not out current greatest number thats also less than amount, so reitterate through array
           continue;
       }
    
    
     }
    // this else is linked to the first if statement 
    // if the largest variable is greater than the amount than skip that element and reitterate
    }
    else {
        
        continue;
    }
    
    //increment the counter since were doing an opperation
    counter++;
    console.log('debugging: ' + 'currently opperating ' + amount  + ' -  ' + largest + ' and setting it equal to amount ' + 'the current counter value is at ' + counter);
    var num;

    //the operation: subtract our greatest number from our amount
    amount = amount - largest;
    //if we can still subtract from the new amount with our largest var 

    //rather than reiterating through the loop we will check if our current greatest number is still the greatest number


    if(largest <= amount) {
        console.log(largest + ' can still go into ' + amount)
        //find hwo many times our greatest number can go into the amount 
        num = parseInt(amount / largest);
        console.log('it can go in ' + num + ' times')
        //add however many opperations we cut out to the counter

        console.log('which means we are going to do ' + num + ' opperations ' + 'so add num to counter')
        counter = counter + num;
        // set a var equal to the element times how many times it goes in
        largest = largest * num;
        
        console.log('debugging: ' + 'currently opperating ' + amount  + ' -  ' + largest + ' and setting it equal to amount ' + 'the current counter value is at ' + counter);
        //subtract it from the amount
        amount = amount - largest;

        
        
    }
//checking for edge case: reach end of array and still not at total operations needed

//reset the loop to see if the new greatest number is still in the array

   if (amount > 0) {
   

       i = -1;
       n = 0; 
       continue;
   }

}
//edgecase: number needed was not found in loop in this case the problem is unsolvable and we will return -1
if (amount > 0){
    return - 1;
}
return 'the fewest possible moves is ' + counter;
}




  

  
  console.log(veryHard([2], 3   ));

 // Input: coins = [1, 2, 5], amount = 11