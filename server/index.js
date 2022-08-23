//? IMPORTS FROM PACKAGES
const express = require('express');

//? IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth');

//! INITS
const PORT = 3000;
const app = express();

//* MIDDLEWARE
// CLIENT -> MIDDLEWARE -> SERVER -> CLIENT
app.use(authRouter)

app.listen(PORT, () => {
    console.log(`Connected at port ${PORT}`)
})