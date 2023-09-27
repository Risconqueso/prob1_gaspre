const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
  host: "precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com",
  user: "candidatoPrueba",
  password: "gaspre21.M",
  database: "prueba",
  port: 3306,
};

// Endpoint to get station data
app.get("/getStationData/:stationId", (req, res) => {
  const stationId = req.params.stationId;

  const pool = mysql.createPool(dbConfig);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting a database connection:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    connection.query(
      "SELECT * FROM brands WHERE Id = ?",
      [stationId],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          res.json(results[0]);
        }
      }
    );
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
