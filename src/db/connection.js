const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/students-api", {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });
