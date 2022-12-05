const express = require('express');
const app = express();
const cors =require('cors')
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 5000;

require('./db/conn')

const Data = require('./schema/schema');
const mongoose= require('mongoose');
const { json } = require('express');






app.get('/',(req,res)=>{
    res.send("applicatio working...")
})



app.post("/chat", async (req, res) => {

    const { name, message } = req.body;
    

    try {
        const data = new Data({
            name, message
        })
        const response = await data.save();
        if (response) {
            res.status(200).json(response)

        }
        else {
            res.status(400).json()

        }
    } catch (e) {
        res.status(400).json()


    }

})


app.get('/chat', async (req, res) => {



    try {
        const response = await Data.find({});

        if (response) {
            res.status(200).json(response)
        } else {
            res.status(400).json({})
        }

    } catch (e) {
        res.status(400).json({})
    }

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
