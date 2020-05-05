// i am bringing in the Express module so that in my server.js file in order for me to use
const express = require('express')

// Creating a new express app
const app = express();

// creating a variable that will be set to the port
const PORT = process.env.port || 3002;

let data = require('./employees.json')

app.get('/', (req, res) => {

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

const employee = data.employees.find(c => c.id === parseInt(req.params.id));    

    if (!employee) res.status(404).send("Employee was not found")
    res.send(employee);
});

//add a default employee to database
app.post('/employees', (req,res) => {
        data.employees.push(
            {
            "name": "default",
            "id": data.employees.length + 1,
            "salary": 150000,
            "job": "CEO"
        }
        );
      res.send('employee added to database')

})


app.delete('/employees/:id', (req, res) => {

    const employee = data.employees.find(c => c.id === parseInt(req.params.id));    
    
        if (!employee) res.status(404).send("Employee was not found")
        
        data.employees.splice(req.params.id, 1);

        res.send('employee ' + req.params.id + ' removed from database')
    });
    

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
}); 