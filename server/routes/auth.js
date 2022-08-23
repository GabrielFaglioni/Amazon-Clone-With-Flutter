const express = require('express');

const authRouter = express.Router();

authRouter.post("/api/signup", (req, res) => {

    console.log(req.body)
    // Get Data from the Client
    // Post that data in the Database
    // Return that data 
    res.json({ msg: "Gabriel" })
})

authRouter.get("/user", (req, res) => {
    res.json({ msg: "Gabriel" })
})

module.exports = authRouter;