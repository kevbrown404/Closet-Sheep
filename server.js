const express = require('express');
const app = express();

const PORT = 3000

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const closet = require('./models/closet')

// INDEX
app.get('/closet', (req, res) => {
    res.render('index.ejs', {closet})
})

// CREATE
app.get("/closet/new", (req, res)=>{
    res.render("new.ejs")
})

// EDIT 
app.get("/closet/edit/:id", async (req, res)=>{
    res.render("edit.ejs", {closet})
})

// SHOW 
app.get("/closet/:id", (req, res)=>{
   const clothing = clothing(req.params.id);
   res.render("closet/show.ejs", {clothing})
})

// DELETE
app.delete("/closet/:id", async (req, res)=>{
    const clothing = await Clothing.findByIdAndDelete(req.params.id)
    res.redirect("/closet")
})

app.get('/*', (req, res) => {
    res.send("Bad Link");
})

app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));