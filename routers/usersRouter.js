const express = require("express");
const  User  = require("../models/user");
const { Listing } = require("../models/listing");
const router = express.Router();

// INDEX *
router.get('/', (req, res) => {
    User.find().then(users => {
        res.render('users/usersIndex.ejs', {users})  
    })
})

//NEW
router.get("/new", (req, res, next) => {
    res.render('users/newuser.ejs')
});

// EDIT 
router.get("/new/:id/edit", async (req, res) =>{
    const user = await User.findById(req.params.id)
    res.render("edit.ejs", {user: user})
})
router.put("/new/:id", async (req, res)=>{
    const id = req.params.id;
    console.log(req.body);
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.render("show.ejs", {user: user, id: id}) 
})

//CREATE
router.post("/signup", (req, res, next) => {
    User.create(req.body).then(user => {
    console.log(user)
    res.redirect('/users')                       
})
});

// SHOW 
router.get("/new/:id", async (req, res)=>{
    const id = req.params.id
    const user = await User.findByIdAndUpdate(req.params.id)
    res.render("show.ejs", {user: user, id:id})
 })

 // DELETE
 router.delete("/new/:id", async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.redirect('/users')
 })

module.exports = router;