const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', (err)=> {

    if (!err) {
        console.log(" Data Connection Successfull")
    }
    else{
        console.log("Error in Connection")
    }
})

module.exports = mongoose;



