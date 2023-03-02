import mysql from "mysql" //=> package pour se connecter à la database
import dotenv from "dotenv"// => package pour charger les variables d'environnement
dotenv.config() //=> config pour pouvoir appeler les variables d'environnement


export const dbConnect = mysql.createPool({  //=> instance de connection à mysql (elle est exportée pour pouvoir être utilisé par les Controllers)
                                             // j'utilise createPool() plutot que createConnection() parce que cette dernière se coupe après 1 minute d'inactivité
    host: process.env.DB_HOST, // spécifie l'hôte de la database
    user: process.env.DB_USER, //spécifie l'utilisateur nécessaire pour se connecter à la database
    password: process.env.DB_PASSWORD, // spécifie le mot de passe pour se connecter à la database
    database: process.env.DB // le nom de la database
})