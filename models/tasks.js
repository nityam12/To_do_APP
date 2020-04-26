const mongoose = require('mongoose'); //same instance from other filec

const taskSchema = new mongoose.Schema({
    description: {
        type: String, //multiple propery can be added
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    task_type:{
        type:String,
        required:true
    }
    
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;