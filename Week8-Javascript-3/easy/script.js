
    var swim = exercise('swimming');
    console.log(swim()); 
    var run = exercise('running');
    console.log(run()); // prints "Today's exercise: running"


function exercise(a){

       return function swim(){
               return "Today's exercise: " + a;
       }


};


    



    //Medium

    

    var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"


var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));  


function cutPizzaSlices(x){

        return function(y){

                return 'Each person gets ' + x / y + ' slices of pizza';

        }        
}

//Hard

