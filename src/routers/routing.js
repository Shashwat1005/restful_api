const express = require("express");
const student = require("../model/students");

const router = new express.Router();

router.get("/route", (req, res) => {
  res.send("Routing mtd is being used");
});

router.post("/students", async (req, res) => {
  // console.log(req.body);

  // const user = new student(req.body);

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });

  //// res.send("Hello from the server side");

  try {
    const user = new student(req.body);

    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// this get mtd gets all the user data
router.get("/students", async (req, res) => {
  try {
    const getData = await student.find();
    res.send(getData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// specific data from student collection
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const specificData = await student.findById(_id);
    // res.send(specificData);
    console.log(specificData);
    if (!specificData) {
      res.status(404).send();
    } else {
      res.send(specificData);
    }
  } catch (err) {
    res.send(err);
  }
});

//This mtd will update some fields in our document
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

// This mtd will delete specific data from server

router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await student.findByIdAndDelete(_id);

    if (!_id) {
      return res.status(400).send();
    } else {
      res.send(deleteStudent);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
