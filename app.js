const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const Sequelize = require("sequelize");
const db = new Sequelize("codegig", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => console.log("db connected"))
  .catch(err => console.log("error" + err));

const app = express();

app.get("/", (req, res) => {
  res.send("Index");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
