//action for a controller
//as it is a object it must have a name -0home
const Task = require('../models/tasks');
module.exports.home = function(req, res) {
Task.find({},function(err,task){
    if(err)
    {
        console.log('Error in Fetching tasks from db');
        return;
    }
    return res.render('home', {
        title: "TO_DO_APP",
        task_list:task
    });
});
    
};