
const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');



router.post('/', (req, res) => {
    let emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        dept : req.body.dept
    })

emp.save((err, doc) => {

if (err){
    console.log('Error in post datad' +err)
}
else {

    res.send(doc);
}

})
});

module.exports = router;
 
