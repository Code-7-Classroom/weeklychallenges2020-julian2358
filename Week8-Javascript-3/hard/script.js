
function dataSecurity(){

  
            return function Pii(name, ssn){
                    this.name = name;
                    
                    this.ssn = name;
                    }

                    
                    this.getName = function(){
                        return this.name;
                    }
            }                 
    
    




    var john = new Pii('Julian', 2548322461)

console.log(john.getName);
