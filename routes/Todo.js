const express= require('express');
const TodoController = require('../controllers/todo.controller');
const router = express.Router();

const mongoose = require('mongoose');

const Tasks = mongoose.model('task');

router.get('/allTodos',(req,res,next) => {
    TodoController.getAll().then(function() {

    });
});

router.post('/addTodo',(req,res,next)=>{
    TodoController.addTodo(req.body).then(function(data,err){
        res.redirect('/');
    })
});

router.put('/changeStatus',(req,res,next)=> {
    TodoController.findById(req.body._id).then(function(data,err){
        if(err)
            return err
        TodoController.updateTodos(req.body._id,!data.completed).then(function(data,err){
            if(err)
                return err;
            res.json({
                status: 200
            });
        })
    })
})

router.delete('/deleteItem',(req,res,next)=> {
    TodoController.deleteTodo(req.body._id).then(function(data,err){
        if(err)
            return err
        res.json({
            status: 200
        });
    })
})
module.exports = router;