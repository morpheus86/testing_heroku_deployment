var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./config/db.config");

const Customer = db.customers;

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  initial();
});

require("./routes/customer.router")(app);

// Create a Server
var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

function initial() {
  Customer.create({
    firstname: "Jack",
    lastname: "Davis",
    age: 25,
  });

  Customer.create({
    firstname: "Mary",
    lastname: "Taylor",
    age: 37,
  });

  Customer.create({
    firstname: "Peter",
    lastname: "Smith",
    age: 32,
  });
}
