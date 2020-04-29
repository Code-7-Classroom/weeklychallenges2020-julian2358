let arr = process.argv;
let fs = require('fs');
const path = require('path');


const hard = fs.readdir(process.argv[2], function callback (err, list) { 
    for (i = 0; i < list.length; i++) {

        if(path.extname(list[i]) == '.' + arr[3]){
            console.log(list[i]);    
        }
    }
} )