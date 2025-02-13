// const mysql = require("mysql2");
// require("dotenv").config();

import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '12346',
    database: process.env.DB_NAME || 'task_manager'
});


db.connect(error => {
    if(error) console.log("database connection failed" , error);

    console.log("connected to mysql database.");
})

export default db;