import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20071230p",
  database: "test01",
});

// query

try {
  const [result, fields] = await connection.query("SELECT * FROM nodetable;");

  console.log(result);
  console.log(fields);
} catch (err) {
  console.log(err);
}
