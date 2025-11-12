const express = require('express');

const userRouter = require('./routes/users');
const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');
app.use('/users', userRouter);

app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index", {user:"Aaron!"});
}); //this function will run when someone goes to the root folder

app.listen(3030);