const express = require('express');
const app = express();
const port=3000;
const bodyParser = require("body-parser")




app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

//post data bisa menggunakan (req.query / req.body)
app.post("/login",(req,res)=>{
    console.log(req.query.Kelas)
    res.send("Login Berhasil")
})

// untuk put data
app.put("/unsername",(req,res)=>{
    console.log(req.body)
    res.send("Update Berhasil")
})

app.listen(port, () => {
    console.log(`Server started on port${port}`);
});