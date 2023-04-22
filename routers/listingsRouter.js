const express = require("express");
const { Listing } = require("../models/listing");
const { User } = require("../models/user");
const router = express.Router();

// INDEX *
/*router.get('/', (req, res) => {
    User.find()
    res.render('users/usersIndex.ejs', {User})
})*/

// NEW *
router.get("/new", (req, res)=>{
    res.render("new.ejs")
})

// CREATE
router.post("/", (req, res, next) => {
    console.log(req.body)
        Listing.create(req.body).then((createdListing) => {
               res.redirect("/users");
        });
})

router.get("/user/:id", (req, res, next) => {
    let collectionAuthor = "Listings";
  
    console.log("getting all listings by user ID");
  
    Listing.find({ user: req.params.id }).then((listings) => {
      listings.length >= 1
        ? (collectionAuthor = listings[0].user.firstName)
        : "This author has no listings.. :O"; 
        console.log(listings);
       res.render("index.ejs", { listings, collectionAuthor });
    });
});

// EDIT 
router.get("/:id/edit", async (req, res) =>{
    const listing = await Listing.findById(req.params.id)
    res.render("edit.ejs", {listing: listings})
})
router.put("/:id", async (req, res)=>{
    const id = req.params.id;
    const listing = await Listing.findByIdAndUpdate(req.params.id)
    res.redirect("/")
})

// DELETE
router.delete("/:id", async (req, res)=>{
    const listing = await Listing.findByIdAndDelete(req.params.id)
    res.redirect("/")
})

module.exports = router;