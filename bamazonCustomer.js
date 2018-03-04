var mysql = require('mysql');
var inquirer = require('inquirer');
const cTable = require('console.table');
var Table = require('easy-table')

//===============connection====================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runSearch();
});

//===========start================
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
    .then(function (answer) {
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
//==================display all of the products==============
      function displayProducts() {

        console.table("Selecting all products...\n");

        connection.query("SELECT * FROM products", function (err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
          idSearch(res);
          // connection.end();

        })
        connection.end();
      }

// this function will ask 2 questions
      function idSearch() {
      
        inquirer.prompt([
    
            {
                name: "ID",
                type: "input",
                message: "What is the item number of the item you wish to purchase?"
            }, {
                name: 'Quantity',
                type: 'input',
                message: "How many would you like to buy?"
            },
    
        ]).then(function(answers) {
            //set captured input as variables, pass variables as parameters.
            var quantityDesired = answers.Quantity;
            var IDDesired = answers.ID;
            purchaseUpdate(IDDesired, quantityDesired);
            buyStuff();
        });
    
    }; 
    

    // worked with my tutor on this function
    function buyStuff(){

      inq.prompt(questions.buy).then((answer)=>{
      
        var buyItemID=[answer.buy];

        console.log(buyItemID);
        // get quantity
      
          inq.prompt(questions.quant).then((ans)=>{
            var buyItemQuant=ans.buyQuantity;
              connection.query('SELECT * FROM products WHERE id=?',[buyItemID], (error, results) => {
                  if (error) throw error;
      
                  console.log(results);
                })
                connection.end();
  
              })
            })
          }
        })
      }


