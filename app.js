const express = require('express');
const app = express();
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index", { message: "apples"})
})

userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)
