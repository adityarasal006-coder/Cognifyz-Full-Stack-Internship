const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let users = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.send("Invalid data");
  }

  users.push({ name, email });
  res.render("success", { name, email });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
