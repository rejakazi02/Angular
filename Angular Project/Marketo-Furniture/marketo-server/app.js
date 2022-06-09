const express = require('express');
const app = express();
const users = require('./users.json');

const port = process.env.PORT || 4000;

app.get("/", (req, res)=>{
    res.send("Server is running...");
});

app.get("/users",(req, res)=>{
    res.json(users);
})

app.listen(port,()=>{
    console.log(`Marketo server is running on port ${port}`);
});

