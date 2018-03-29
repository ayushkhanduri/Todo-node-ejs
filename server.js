const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express(); 


mongoose.connect("mongodb://localhost:27017/todos");

mongoose.Promise = global.Promise;

require('./models/Task');
const Tasks = require('./routes/Todo');

const todoController = require('./controllers/todo.controller');

app.use("/public",express.static(__dirname+'/static'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');



app.use('/api',Tasks);

app.get('/',(req,res,next) => {
    todoController.getAll().then(function(data) {
        let todos = [];
        if(data)
            todos = data;
        res.render('index.ejs' ,{title: "This is a todo application !",todos});
        
    })
});

app.listen(process.env.PORT || 3000 , (err) => {
    if(err)
        return err;
    console.log("Listening to port 3000");
})