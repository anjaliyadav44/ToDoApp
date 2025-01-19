const Todo=require("../models/Todo");
exports.createTodo=async(req,res)=>{
    try{
        const{title,description}=req.body;
        const response=awaitTodo.create({title,description});
        res.status(200).json({
         success:true,
         data:response,
         message:'entry created sucessfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}