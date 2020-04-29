var i = 2;
var total = 0;

while(i < process.argv.length){
    let current = (Number(process.argv[i]))
    
    total = total + current;
    i++;

   
}


console.log(total);