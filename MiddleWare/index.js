const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

// app.use((req,res, next)=>{
//     console.log("First middleware");
//     next();
// })

// app.use((req,res, next)=>{
//     console.log("Second middleware");
//     return next();
// })

app.use((req,res,next)=>{
    req.method="GET";
    console.log(req.method.toUpperCase(), req.path);
    next();
})



app.get("/", (req,res)=>{
    res.send("HOME PAGE");
})

app.get("/dogs", (req,res)=>{
    res.send("WOOF WOOF");
})


app.listen(3000, ()=>{
    console.log("app is running on localhost:3000");
});