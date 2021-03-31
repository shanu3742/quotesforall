const express = require("express");
const app = express();
const port = process.env.PORT||4060;
const importdata = require("./quotes.json")
app.get("/",(req,res) => {
    res.send("hellow world");
})
app.get("/apis",(req,res) => {
    res.send(importdata);
})

app.listen(port, () => {
    console.log("listen from server side");
})
