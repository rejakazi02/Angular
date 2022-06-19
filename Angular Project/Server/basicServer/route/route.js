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

router.get("/getSing/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    Employee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in post datad" + err);
      } else {
        res.send(doc);
        console.log("Get single the Data SuccessFully");
      }
    });
  } else {
    return res.status(400).send("No data find by id" + req.params.id);
  }
});


// put api----------------

router.put("/putt/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {

        let emp = {
            name: req.body.name,
            position: req.body.position,
            dept: req.body.dept,
          };

      Employee.findByIdAndUpdate(req.params.id, {$set : emp}, {new :true}, (err, doc) => {
        if (err) {
          console.log("Error in Update data" + err);
        } else {
          res.send(doc);
          console.log("Update the Data SuccessFully");
        }
      });
    } else {
      return res.status(400).send("No data find by id" + req.params.id);
    }
  });


// delete api----------------

router.delete("/delete/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
          console.log("Error in Delete data" + err);
        } else {
          res.send(doc);
          console.log("Delete the Data SuccessFully");
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
      console.log("Post the Data SuccessFully");
    }
  });
});

module.exports = router;
