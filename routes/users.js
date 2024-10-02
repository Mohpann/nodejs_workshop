const express = require("express")
const router = express.Router() // mini app that lives inside this application
// router works the same as app
// Can use .send, .get, etc.


// Utilizing router to go route to new pages


router.get("/", (req, res) => {
    res.send("User List")
})
 
router.get("/new", (req, res) => {
    res.send("User New Form")
})


// In order to use the router, export it
module.exports = router