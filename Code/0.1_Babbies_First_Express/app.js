//app.js - defined by express doc
//import express
const express = require("express");
const app = express();

//calls and instantiates express -- alternative
// const app = require("express")();

app.use(express.json());

// endpoint callback function
app.get("/", (req, res) => {
    res.send({ message: "Welcome"});
});

app.get("/about", (req, res) => {
    res.send({ message: "Hello this is my server"});
});


app.post("/", (req, res) => {
    res.send(req.body);
});


app.post("/opinion", (req, res) => {
    res.send(req.body);
});


app.listen(8080);