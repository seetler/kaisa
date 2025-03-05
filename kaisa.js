

const express = require("express")
const path = require("path")
const key = require("./keys.js")

const e = express();
const port = key.portof;

e.use(express.static(path.join(__dirname, "public")))

e.get("/time", (req, res) =>{
    res.json({ now : new Date().toLocaleTimeString()}) ;    
}) ;

e.listen(port, ()=>{
    console.log(`Up and going at ${port}`);
})