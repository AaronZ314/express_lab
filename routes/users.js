const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render(`users/list`, {users:users});
});
router.get('/new', (req,res)=>{
    res.render('users/new',{firstName: ""});
});
// router.get('/:id',(req,res)=>{
//     res.send(`Getting user data: ${req.params.id}`);
// });
router.post('/',(req,res)=>{
    //res.send("User Created!");
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;

    const isValid = firstName !=="" && lastName!==""; //Check if first name is there
    if(isValid) {
            users.push({
                firstName:firstName,
                lastName: lastName,
                gender: gender,
                age: age,
            });
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
const users = [{firstName:"Aaron",lastName: "Zhang", gender: "Male", age: 20},
    {firstName:"Ashton",lastName: "Hall",gender: "Male", age:20}];

router.param("id", (req,res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();
});
module.exports = router;