const mongoose = require('mongoose');
const newUrl = `mongodb+srv://Ankan1234:Ankan@1234@cluster0.0uxbw.mongodb.net/?retryWrites=true&w=majority`
const url2 = " mongodb://127.0.0.1:27017/chatDB";
mongoose.connect(newUrl, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false


}).then((res) => {
    console.log("connect successful");
}).catch(() => {
    console.log("connect unsuccessful");
})






