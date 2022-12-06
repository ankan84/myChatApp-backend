const mongoose = require('mongoose');
const sql=require('mysql')
const newUrl = `mongodb+srv://Ankan1234:Ankan@1234@cluster0.0uxbw.mongodb.net/?retryWrites=true&w=majority`
const url2 = " mongodb://127.0.0.1:27017/chatDB";
// mongoose.connect(url2, {

//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false


// }).then((res) => {
//     console.log("connect successful");
// }).catch(() => {
//     console.log("connect unsuccessful");
// })


// host:"127.0.0.1",
// port:3306,
// user:"root",
// password:'',
// database:'student'

var connection=sql.createConnection({
    host:"sql6.freesqldatabase.com",
    port:3306,
    user:"sql6583053",
    password:'xnU4eRdc8b',
    database:'sql6583053'

})

connection.connect((err)=>{
   if(err){
    console.log("not connent",err)
   }else{
    console.log("connect")
   }
})




module.exports=connection;









