


function parent(){
   
     return function Pii(name, ssn){
         this.name = name;
         this.ssn = ssn;

       

     return function getName(){
         return this.name;
     }
    }
    };


