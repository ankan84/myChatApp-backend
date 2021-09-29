const mongoose=require('mongoose');
const list=mongoose.Schema({
    name:{
        type:String,
        required:true
        
    
    },
    message:{
        type:String,
        require:true
    
    }




})

const Data=mongoose.model("chatBox",list);

module.exports=Data;