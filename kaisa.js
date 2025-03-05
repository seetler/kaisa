

const express = require("express")
const path = require("path")

const e = express();
const port = 4889;

e.use(express.static(path.join(__dirname, "public")))

e.get("/time", (req, res) =>{
    res.json({ now : new Date().toLocaleTimeString()}) ;    
}) ;

e.listen(port, ()=>{
    console.log(`Up and going at ${port}`);
})