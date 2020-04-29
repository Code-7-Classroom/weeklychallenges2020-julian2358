// i am bringing in the Express module so that in my server.js file in order for me to use
const express = require('express')

// Creating a new express app
const app = express();

// creating a variable that will be set to the port
const PORT = process.env.port || 5000;

let data = require('./employees.json')

app.get('/test', (req, res) => {

        res.send("hello world")

})

app.get('/employees', function(req, res){

    if(!data){
        res.status(404).send(`Couldn't find the students`);
    }else{
        res.send(data);
    }
})

app.get('/employees/:id', (req, res) => {
    const sData = data.employees.find((employees) => {
        console.log(employees.id)

        return parseInt(req.param.id) === employees.id
    })

    if(!sData){
        res.status(404).send(`Couldn't find the student id`);
    }
   
        res.send(sData);
    
})



app.get("/", (req, res) => {
    res.send("Welcome to my website")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
}); 