const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 30,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
});

mongoose.model('task',TaskSchema);

