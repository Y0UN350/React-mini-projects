const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "local",
  password: "password",
  database: "FakeDatabase",
});

app.get("/select", (req, res) => {
  const countryName = "bulgaria";
  const population = 60000000;

  db.query(
    "INSERT INTO countries (countryName, population) VALUES (?, ?)",
    [countryName, population],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("server running");
});
