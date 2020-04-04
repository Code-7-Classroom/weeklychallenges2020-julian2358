
    function cutPizzaSlices(slices){
        var amount;
        return function(people){
            amount = slices / people;
            return 'Each person gets ' + amount + ' slices of pizza'
    }
};





var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"
