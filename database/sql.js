const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bty405fvagr6nhlar2dr-mysql.services.clever-cloud.com",
  user: "ucbsztq9jgf2mfpx",
  password: "QGdH68SPghbVpMVhvy1q",
  database: "bty405fvagr6nhlar2dr",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = connection;
