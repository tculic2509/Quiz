const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors())

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

var config = {
    "user": "", // Database username
    "password": "", // Database password
    "server": "TONI-PC",// Server IP address
    "database": "Kviz", // Database name
    "options": {
        "encrypt": false,
        "port": 3001 // Disable encryption
    }
}

// Connect to SQL Server
sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
});

// Define route for fetching data from SQL Server
app.get("/", (request, response) => {
    // Execute a SELECT query
    new db.Request().query("SELECT * FROM questions", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Start the server on port 3000
app.listen(3001, () => {
    console.log("Listening on port 3001...");
});