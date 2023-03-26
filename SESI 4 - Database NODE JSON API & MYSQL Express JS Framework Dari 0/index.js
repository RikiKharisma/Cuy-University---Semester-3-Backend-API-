const express = require('express');
const app = express();
const port=3000;
const bodyParser = require("body-parser");
const db = require("./connection")
const response = require("./response");
const { query } = require('express');

//routes /url / endpoint utama kita method get
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    db.query("SELECT * FROM mahasiswa",(error,result)=>{
        //HASIL DARI MYSQL
        response(200,result,"get all data from mahasiswa",res)
    })
})

//mencari di database menggunakan express
app.get("/find",(req,res)=>{
    const sql = `SELECT Nama FROM mahasiswa WHERE Nim = ${req.query.nim}`
    db.query(sql,(error,result)=>{
        response(200,result, "find mahasiswa name",res)
    })
})

app.listen(port,()=>{
    console.log("Server Start")
})