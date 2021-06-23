const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const HttpError = require("./http-error.modle/http-error.modle");
const profilesRoutes = require("./routes/profiles.route");
const usersRoutes = require("./routes/users.route");
const app = express();

require('dotenv').config();

app.use(cors());

app.use(bodyParser.json());

app.options("*", cors());

app.use("/api/profiles", profilesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Couldn't find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "Unexpected error occurred" });
});

mongoose
  .connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGO_HOSTNAME}/${process.env.MONGO_DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => app.listen(5000))
  .catch((e) => console.log(e));
