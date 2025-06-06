import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// config dotenv
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// await pool.query(
//   "INSERT INTO Users(first_name,last_name,email,user_password) VALUES('Poom', 'Poom', 'poomibi@gmail.com', '1234');"
// );

const getAllItems = async () => {
  const result = await pool.query("SELECT * FROM Users");
  console.log(result[0]);
};

const getItem = async (id) => {
  const result = await pool.query(
    `SELECT * FROM Users WHERE Users.user_id = ${id}`
  );
  console.log(result[0]);
};

// getAllItems();
getItem("1 OR 1=1");
