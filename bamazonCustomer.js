const mysql = require("mysql");

const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Lucyrik17",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("---------------WELCOME TOO THE WEIRD SIDE OF BAMAZON---------------------------")
    dataItems()
});

function dataItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            var store = "Item ID: " + res[i].item_id +
                "\nProduct: " + res[i].product_name +
                "\nPrice: $" + res[i].price +
                "\nQuantity: " + res[i].stock_quantity +
                "\n------------------------------------------"
            console.log(store);
        }
        start()
    });
}

function start() {
    inquirer.prompt([{
                type: 'input',
                message: 'Enter the Item number of what you would like to purchase',
                name: 'purchased'
            },
            {
                type: 'input',
                message: 'The Quanity of you would like to Purchase',
                name: 'amount'
            }
        ])
        .then(function (result) {
                const purchased = result.purchased;
                const amount = parseInt(result.amount)
                connection.query("SELECT * FROM products", function (err, res) {
                    if (res[purchased - 1].stock_quantity <= amount) {
                        console.log('Not enough stock! Try again.')
                    }
                    else{
                        connection.query("UPDATE products SET ? WHERE ?", [{
                            stock_quantity: res[purchased - 1].stock_quantity - amount
                                },
                                {
                                    item_id: purchased
                                }
                            ], function (err, resu) {
                                console.log("You Purchased: " + res[purchased - 1].product_name)
                                console.log("Quantity: " + amount + " totalling $" + ((res[purchased - 1].price * amount).toFixed(2)))
                            })
                        }
                });
                
            })
        }
