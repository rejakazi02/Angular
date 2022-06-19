const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
const ObjectId = require("mongoose").Types.ObjectId;

// get api

router.get("/get", (req, res) => {
  Employee.find((err, doc) => {
    if (err) {
      console.log("Error in post datad" + err);
    } else {
      res.send(doc);
      console.log("Get the Data SuccessFully");
    }
  });
});

//   get single api

router.get("/put/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Employee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in post datad" + err);
      } else {
        res.send(doc);
        console.log("put the Data SuccessFully");
      }
    });
  } else {
    return res.status(400).send("No data find by id" + req.params.id);
  }
});
// router.put("/put/:id", (req, res) => {
//     Employee.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         position: req.body.position,
//         dept: req.body.dept,

//     }, (err, doc) => {
//         if (err) {
//           console.log("Error in post datad" + err);
//         } else {
//           res.send(doc);
//           console.log("put the Data SuccessFully")
//         }
//     })

//     });


// delete api----------------

router.get("/put/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
          console.log("Error in Delete data" + err);
        } else {
          res.send(doc);
          console.log("put the Data SuccessFully");
        }
      });
    } else {
      return res.status(400).send("No data find by id" + req.params.id);
    }
  });

// post api
router.post("/", (req, res) => {
  let emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    dept: req.body.dept,
  });

  emp.save((err, doc) => {
    if (err) {
      console.log("Error in post datad" + err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;
