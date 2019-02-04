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
    console.log("Welcome you are Connected");
    console.log("");
    dataTable();
});

const dataTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
        itemSelect();

    });
}

function itemSelect() {
    inquirer
        .prompt(
            [{
            name: "ID",
            type: "Input",
            message: "Select the product ID that you would like to BUY",
    },
    {
            name:"Units",
            type:"inputs",
            message:"Enter the amount of Units you like"
    } 
])
    }

