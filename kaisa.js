import express from "express";
import path from "path";
import OpenAI from "openai";

// Imports variables and functions from a separate file. //
import * as keys from "./keys.js";


// const ccai= new openai();

// Creating a quicker variable to call the utilities of express package. //
const e = express();
const port = keys.portof;
const key = keys.keyof;
const ccai=  new OpenAI({apiKey: keys.keyof});

const completion = await ccai.chat.completions.create({
    model:"gpt-4o-mini",
    messages: [
        {
            role: "user",
            content: "tell me a haiku"
        }
    ]
})

console.log(completion.choices[0].message);


// e.use(express.static(path.join(__dirname, "public")))

// e.get("/time", (req, res) =>{
//     res.json({ now : new Date().toLocaleTimeString()}) ;    
// }) ;

// e.listen(port, ()=>{
//     console.log(`Up and going at ${port}`);
// })