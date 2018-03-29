const mongoose = require('mongoose');
const Task = mongoose.model('task');

function getAll() {
    return Task.find({});
}

function addTodo(obj){
    obj.completed = false;
    let task = new Task(obj);
    return task.save();
}

function findById(id){
    return Task.findById(id);
}

function updateTodos(id,toggle){
    return Task.update({"_id": id}, {
        $set: {
            completed: toggle
        }
    });
}

function deleteTodo(id){
    return Task.findOneAndRemove({"_id": id});
}
module.exports = {getAll,addTodo,findById,updateTodos,deleteTodo};