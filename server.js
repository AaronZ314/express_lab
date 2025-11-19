const express = require('express');

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');
//app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index", {user:"Aaron!"});
}); //this function will run when someone goes to the root folder

app.listen(3030);

function logger(req,res,next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}