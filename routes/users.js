const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render(`users/list`, {users:users});
});
router.get('/new',(req,res)=>{
    res.send('New User Form');
});
// router.get('/:id',(req,res)=>{
//     res.send(`Getting user data: ${req.params.id}`);
// });
router.post('/',(req,res)=>{
    //res.send("User Created!");
    const firstName = req.body.firstName;
    const isValid = firstName !==""; //Check if first name is there
    if(isValid) {
            console.log(`Adding user: ${firstName}`);
            users.push({name:firstName});
            console.log(`New Set of Users: ${users}`);
            res.send("User Created!");
    }
    else{
        console.log("Error adding user!")
        res.render("users/new", {firstName:firstName});
    }
});
router.route("/:id").get((req,res)=>{
    res.send(`Getting user data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});
const users = [{name:"Aaron"},{name:"Ashton"}];

router.param("id", (req,res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();
});
module.exports = router;