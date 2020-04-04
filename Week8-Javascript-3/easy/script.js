function exercise(a){

    return function(){
        return "Today's exercise is " + a;  
    }    
}





var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"
