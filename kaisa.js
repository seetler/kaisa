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
const openai=  new OpenAI({apiKey: keys.keyof});


const thread = await openai.beta.threads.create();

const m2 = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: "tell me about how to start a business in sonoma"
    }
  );


  let run = await openai.beta.threads.runs.createAndPoll(
    thread.id,
    { 
      assistant_id: "asst_cVysiYZvcd0ZGTuxZ2gFv2vP",

    }
  );

  if (run.status === 'completed') {
    const messages = await openai.beta.threads.messages.list(
      run.thread_id
    );
    for (const message of messages.data.reverse()) {
      console.log(`${message.role} > ${message.content[0].text.value}`);
    }
  } else {
    console.log(run.status);
  }


// e.use(express.static(path.join(__dirname, "public")))

// e.get("/time", (req, res) =>{
//     res.json({ now : new Date().toLocaleTimeString()}) ;    
// }) ;

// e.listen(port, ()=>{
//     console.log(`Up and going at ${port}`);
// })