var x = prompt("First Number");
var op = prompt("mathematic opearator");
var y = prompt("second number")
var ans;


/* functions */
function add(x, y){
    ans = parseFloat(x) +  parseFloat(y);
    console.log(x + " " + op + " " + y + " = " + ans);
};

function subtract(x, y){
    ans = parseFloat(x) - parseFloat(y);
    console.log(x + " " + op + " " + y + " = " + ans);
};

function divide(x, y){
    ans = parseFloat(x) / parseFloat(y);
    console.log(x + " " + op + " " + y + " = " + ans);    
};

function multiply(x, y){
    ans = parseFloat(x) *  parseFloat(y);
    console.log(x + " " + op + " " + y + " = " + ans);
    return x * y;
};

/* logic stuff */
if(op === '+'){
    add(x,y);
    }   
   else if( op === '-'){ 
        subtract(x,y);
   }

  else if(op === '/'){
    divide(x,y);
  }
        
  else if(op === '*'){
      multiply(x,y);
  }
 else{
     console.log("Calculator could not recognize opperator")
 };