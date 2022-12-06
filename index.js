const express = require('express');
const app = express();
const cors =require('cors')

app.use(express.json())
app.use(cors())



const PORT = process.env.PORT || 5000;

const connection=require('./db/conn')

const Data = require('./schema/schema');








app.get('/',(req,res)=>{

    res.send("application running....")
    
})



app.post('/create',(req,res)=>{
     connection.query(`create table chatApp(
        name varchar(20),
        message varchar(2000000000)
    )`
     ,(err,result)=>{
         if(err){
            res.status(400).send(err)
         }else{
            res.status(201).send(result)
         }
     })

})

app.post("/chat", async (req, res) => {

    const { name,message} = req.body;



    connection.query(`insert into chatApp(name,message) values ('${name}','${message}')`,(err,result)=>{

        if(err){
            res.status(400).send(err)
        }else{
            res.status(201).send(result)
        }
    })
    

   

})


app.get('/chat', async (req, res) => {



    connection.query('select * from chatApp',(err,result)=>{
        if(err){
            res.status(500).send()
        }else{
            res.status(200).send(result)
        }
    })


})


// if (process.env.NODE_ENV == "production") {
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//         const path = require('path');
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     })

// }


app.listen(PORT, () => {
    console.log("we are listenning....")
})
