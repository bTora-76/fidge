import mysql from "mysql2/promise"

const access = {
    user : "root",
    password: "20071230p",
    database : "fidgedb",
}

const connPool = mysql.createPool(access)

export default connPool;