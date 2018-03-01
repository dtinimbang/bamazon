var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
runSearch();
});


function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Display Products",
        "ID of the product you want to buy",
        "Units you want to buy",
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Display Products":
          displaySearch();
          break;

        case "ID of the product you want to buy":
          idSearch();
          break;

        case "Units you want to buy":
          unitSearch();
          break;

          default:
          console.log("Didnt hit");
          console.log(answer);
          break;
      }

      function displaySearch() {
        
        console.log("Selecting all products...\n");
        connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          connection.end();
        });
      }
    });
}


