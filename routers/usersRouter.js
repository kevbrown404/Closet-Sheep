const express = require("express");
const { User } = require("../models/user");
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

//CREATE
router.post("/signup", (req, res, next) => {
    User.create(req.body).then(user => {
    console.log(user)
    res.redirect('/users')                       
})
});

// SHOW 
router.get("/:id", (req, res)=>{
    const listing = Listing(req.params.id);
    res.render("show.ejs", {listing: listings})
 })

module.exports = router;