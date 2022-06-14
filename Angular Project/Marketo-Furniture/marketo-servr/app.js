const express = require('express');
const app = express();


// create a server where browsers and API calls can connect 

app.listen(3000, function () {

    console.log("localhost:3000");
});

// create a route that we can access in the browser 

app.get('/', function (req, res) {
    res.send("yep it's working");    
});

// another route 

app.get('/love', (req, res) => {
    res.send('Hi love');
})