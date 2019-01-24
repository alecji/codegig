const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database");

//test db
db.authenticate()
  .then(() => console.log("db connected..."))
  .catch(err => console.log("error" + err));

const app = express();

app.get("/", (req, res) => {
  res.send("Index");
});

// Gig routes
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
