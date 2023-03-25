const express = require('express');
const app = express();
const port=3000;
const bodyParser = require("body-parser");
const db = require("./connection")

//routes /url / endpoint utama kita method get
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    db.query("SELECT * FROM mahasiswa",(error,result)=>{
        //HASIL DARI MYSQL
        console.log(result)
    })
    res.send("Berhasil di update")
})

app.listen(port,()=>{
    console.log("Server Start")
})