
const Task = require('../models/tasks');

module.exports.profile = function(req, res) {


    Task.create({
        description:req.body.description,
            date:req.body.date,
            task_type:req.body.task_type

    },function(err,newTask){
             if(err)
        {
            console.log("error in creating task");
            return;
        }
        // console.log("******",newTask);
        return res.redirect('back');

    });
    // res.render('user_profile', {
    //     title: "My Profile"
    // });
};


module.exports.profileDel=function(req,res){
        // console.log(req.body.id);
            let ids=req.body.id;
            let arr=[];
            arr.push(ids);
            // ids=Array.prototype.slice.call(ids);
            Task.findByIdAndDelete(ids,function(err){

                if(err)
                {
                    // console.log('error in deleting an object from database');
                    return;
                }
            });
       for(let i=1;i<ids.length;i++){
        
        Task.findByIdAndDelete(ids[i],function(err){

            if(err)
            {
                // console.log('error in deleting an object from database');
                return;
            }
        });
    }
    return res.redirect('back');
};


// module.exports.profileDel=function(req,res){
//         console.log(req.body);
//             let ids=req.body.id;
//             // let arr=[];
//             // arr.push(ids);
//             // ids=Array.prototype.slice.call(ids);
//            console.log(ids);

       
//        for(let i of ids){
//         console.log(i);
//         Task.findByIdAndDelete(i,function(err){

//             if(err)
//             {
//                 console.log('error in deleting an object from database');
//                 return;
//             }
//         });
        
//     }
//     return res.redirect('back');
// };

