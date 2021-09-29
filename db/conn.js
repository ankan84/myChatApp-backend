const mongoose=require('mongoose');
const url=`mongodb+srv://chat:chat@1234@cluster0.yh68r.mongodb.net/chatBox?retryWrites=true&w=majority`
  const url2=" mongodb://127.0.0.1:27017/chatDB";
mongoose.connect(url,{
  
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  

}).then(()=>{
    console.log("connect successful");
}).catch(()=>{
    console.log("connect unsuccessful");
})





