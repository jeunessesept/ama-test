import mysql from "mysql"
import dotenv from "dotenv"
dotenv.config()


export const dbConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})