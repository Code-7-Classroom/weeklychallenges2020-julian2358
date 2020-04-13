//1. Data is stored in object properties

var me = {
    name: 'Julian Reeves',

    sayHi: function(){
        console.log(this.name);
    }
};

me.sayHi();