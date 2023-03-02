import mysql from "mysql" //=> package pour se connecter à la database
import dotenv from "dotenv"// => package pour charger les variables d'environnement
dotenv.config() //=> config pour pouvoir appeler les variables d'environnement


export const dbConnect = mysql.createConnection({  //=> instance de connection à mysql (elle est exportée pour pouvoir être utilisé ailleurs)
    host: process.env.HOST, // spécifie l'hôte de la database
    user: process.env.USERDB, //spécifie l'utilisateur nécessaire pour se connecter à la database
    password: process.env.PASSWORD, // spécifie le mot de passe pour se connecter à la database
    database: process.env.DATABASE, // le nom de la database
    port:8889
})