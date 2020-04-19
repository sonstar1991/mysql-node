  
const router = require("express").Router();

//Put all routes here
const user = require("./router");




router.use("/user", user);







module.exports = router;