const express = require("express");
const main = require("./script");
const app = express();

app.get("/", (req, res) => {
  res.send(main());
});

app.listen(1234, () => {
  console.log("The server is connected on port 1234");
});
