var Person = function(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;

    this.exercise = function(){
        console.log('Running is fun! - said no one ever.')
    }

    this.fetchJob = function(){
        console.log(name + ' is a ' + job)

    }
}


var Programmer = function (name, job, age, languages){
    var busy = true;
    Person.call(this, name, job, age);
    this.languages = languages;

    this.completeTask = function() {
        busy = false;
    }

    this.acceptNewTask= function() {
        busy = true;
    }

    this.offerNewTask = function() {
        if (busy === true){
            console.log(name + " can't accept any new tasks right now")
        } else{
            console.log(name + " would love to take on a new responsibility")
        }
    }

    this.learnLanguage = function(lang){
        languages.push(lang);

    }

    this.listLanguages = function(){
        console.log(languages);

    }


};

var jack = new Programmer('john', 'UX Designer', '23', ['html' ,'css']);
var martha = new Programmer('martha', 'Back End Developer', '23', ['Java' ,'C++']);

jack.listLanguages();
martha.listLanguages();
martha.learnLanguage('GO')
martha.listLanguages();