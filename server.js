const express = require("express");
const app = express();
const morgan = require("morgan");
const body_parser = require("body-parser");

app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 3500;
app.listen(port, () => console.log("Listening on Port ", port));
