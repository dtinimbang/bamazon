var mysql = require('mysql');
var inquirer = require('inquirer');
const cTable = require('console.table');
var Table = require('easy-table')


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
      message: "Please Choose [Display Products] if you do not know what you want to pruchase",
      choices: [
        "Display Products",
        "Lets Begin our purchase",
        
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Display Products":
          displayProducts();
          break;

        case "Lets Begin our purchase":
          idSearch();
          break;


          default:
          console.log("Didnt hit");
          console.log(answer);
          break;
      }

      function displayProducts() {
        
        console.table("Selecting all products...\n");

        connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
          idSearch(res);
          // connection.end();
  
        })
        connection.end();
      }

      function idSearch(response) {
        
        inquirer
        .prompt({
          name: "id",
          type: "input",
          message: "choose an ID"
        })
        .then(function(answer) {
          var query = "SELECT product_name, department, price, stock_quantity FROM products WHERE ?";
          connection.query(query, { id: answer.id }, function(err, res) {
            for (var i = 0; i < res.length; i++) {
              console.table("Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || price: " + res[i].price  + " || stock quantity: " + res[i].stock_quantity);
            }
            // runSearch();
          });
        });

      }

    });
}


