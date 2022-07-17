const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const key = require("./key");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("port started " + PORT);
});

// midlware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routs
app.use("/api/journal", require("./routs/journal"));
app.use("/api/praeposter", require("./routs/praeposter"));
app.use("/api/register", require("./routs/register"));

// connect DB
mongoose
  .connect(key.urlDB)
  .then(console.log("mongoDB connect"))
  .catch((e) => {
    console.log(e);
  });
