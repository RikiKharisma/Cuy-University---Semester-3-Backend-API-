const express = require('express');
const app = express();
const port=3000;
const bodyParser = require("body-parser")
const db = require("./connection")

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/mahasiswa/:Nim",(req,res)=>{
    const Nim  =  req.params.Nim
    res.send(`spesifik mahasiswa by id ${Nim}`)
})

app.listen(port,()=>{
    console.log("Port is ready")
})