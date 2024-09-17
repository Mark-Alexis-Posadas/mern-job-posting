require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/jobs", routes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //port
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening of port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
