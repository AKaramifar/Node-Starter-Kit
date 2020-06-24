const express = require('express')
const app = express();

app.get("/",(req, res) =>{
    console.log("Main Page")
    res.json("Main Page")
})


app.get("/node",(req, res) =>{
    console.log("Node is a framework for backend")
    res.json("Node is a framework for backend")
})

app.get("/codeyourfuture",(req, res) =>{
    console.log("Code Your Future is the best")
    res.json("Code Your Future")
})

app.get("/chocolet",(req, res) => {
    const {chocolet_1, chocolet_2} =  req.query;
    res.json({
        "My first favorate chocolet is"  : chocolet_1,
        "My second favorate chocolet is"  : chocolet_2,
    })
})
app.listen(3000, () =>{
    console.log('Listening on port 3000!')
})